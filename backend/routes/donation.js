const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const Razorpay = require('razorpay');

const Donation = require('../models/Donation');

const { sendEmail } = require('../utils/email');

/*
|--------------------------------------------------------------------------
| Razorpay Configuration
|--------------------------------------------------------------------------
*/

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/*
|--------------------------------------------------------------------------
| UPI DETAILS
|--------------------------------------------------------------------------
| Kept for your manual UPI / bank donation option.
|--------------------------------------------------------------------------
*/

const UPI_ID = 'shyamzacx@axl';

/*
|--------------------------------------------------------------------------
| Helper: Get Recipient Email
|--------------------------------------------------------------------------
*/

const getRecipientEmail = () => {
  return (
    process.env.CLIENT_RECEIVER_EMAIL ||
    process.env.EMAIL_USER
  );
};

/*
|--------------------------------------------------------------------------
| POST /api/donations/create-order
|--------------------------------------------------------------------------
| Create Razorpay order
|--------------------------------------------------------------------------
*/

router.post('/create-order', async (req, res) => {

  try {

    const {
      donorName,
      email,
      phone,
      amount,
      type
    } = req.body;

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (!donorName || !email || !amount) {

      return res.status(400).json({
        success: false,
        error:
          'Donor name, email and amount are required.'
      });

    }

    /*
    |--------------------------------------------------------------------------
    | Validate Amount
    |--------------------------------------------------------------------------
    */

    const donationAmount = Number(amount);

    if (
      !Number.isFinite(donationAmount) ||
      donationAmount <= 0
    ) {

      return res.status(400).json({
        success: false,
        error:
          'Please provide a valid donation amount.'
      });

    }

    /*
    |--------------------------------------------------------------------------
    | Convert INR → Paise
    |--------------------------------------------------------------------------
    */

    const amountInPaise =
      Math.round(donationAmount * 100);

    /*
    |--------------------------------------------------------------------------
    | Donation Type
    |--------------------------------------------------------------------------
    */

    const donationType =
      type === 'monthly'
        ? 'monthly'
        : 'one-time';

    /*
    |--------------------------------------------------------------------------
    | Create Razorpay Order
    |--------------------------------------------------------------------------
    */

    const razorpayOrder =
      await razorpay.orders.create({

        amount: amountInPaise,

        currency: 'INR',

        receipt:
          `donation_${Date.now()}`,

        notes: {

          donorName:
            donorName.trim(),

          email:
            email.trim(),

          phone:
            phone?.trim() || '',

          type:
            donationType

        }

      });

    /*
    |--------------------------------------------------------------------------
    | Save Pending Donation
    |--------------------------------------------------------------------------
    */

    const donation =
      await Donation.create({

        donorName:
          donorName.trim(),

        email:
          email.trim(),

        phone:
          phone?.trim() || '',

        amount:
          donationAmount,

        type:
          donationType,

        paymentMethod:
          'Razorpay',

        upiId:
          UPI_ID,

        utr:
          '',

        razorpayOrderId:
          razorpayOrder.id,

        razorpayPaymentId:
          '',

        razorpaySignature:
          '',

        status:
          'Pending'

      });

    /*
    |--------------------------------------------------------------------------
    | Response
    |--------------------------------------------------------------------------
    */

    return res.status(201).json({

      success: true,

      order: {

        id:
          razorpayOrder.id,

        amount:
          razorpayOrder.amount,

        currency:
          razorpayOrder.currency

      },

      donationId:
        donation._id

    });

  } catch (error) {

    console.error(
      '❌ Razorpay Order Creation Error:',
      error
    );

    return res.status(500).json({

      success: false,

      error:
        'Failed to create Razorpay order.'

    });

  }

});


/*
|--------------------------------------------------------------------------
| POST /api/donations/verify
|--------------------------------------------------------------------------
| Verify Razorpay payment
|--------------------------------------------------------------------------
*/

router.post('/verify', async (req, res) => {

  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {

      return res.status(400).json({

        success: false,

        error:
          'Razorpay payment details are incomplete.'

      });

    }

    /*
    |--------------------------------------------------------------------------
    | Create Signature
    |--------------------------------------------------------------------------
    */

    const generatedSignature =
      crypto
        .createHmac(
          'sha256',
          process.env.RAZORPAY_KEY_SECRET
        )
        .update(
          `${razorpay_order_id}|${razorpay_payment_id}`
        )
        .digest('hex');

    /*
    |--------------------------------------------------------------------------
    | Compare Signature
    |--------------------------------------------------------------------------
    */

    const isSignatureValid =
      crypto.timingSafeEqual(
        Buffer.from(generatedSignature),
        Buffer.from(razorpay_signature)
      );

    if (!isSignatureValid) {

      console.error(
        '❌ Invalid Razorpay payment signature.'
      );

      return res.status(400).json({

        success: false,

        error:
          'Payment verification failed.'

      });

    }

    /*
    |--------------------------------------------------------------------------
    | Find Donation
    |--------------------------------------------------------------------------
    */

    const donation =
      await Donation.findOne({
        razorpayOrderId:
          razorpay_order_id
      });

    if (!donation) {

      return res.status(404).json({

        success: false,

        error:
          'Donation record not found.'

      });

    }

    /*
    |--------------------------------------------------------------------------
    | Prevent Duplicate Verification
    |--------------------------------------------------------------------------
    */

    if (
      donation.status === 'Verified' &&
      donation.razorpayPaymentId
    ) {

      return res.status(200).json({

        success: true,

        message:
          'Payment has already been verified.',

        donationId:
          donation._id

      });

    }

    /*
    |--------------------------------------------------------------------------
    | Update Donation
    |--------------------------------------------------------------------------
    */

    donation.razorpayPaymentId =
      razorpay_payment_id;

    donation.razorpaySignature =
      razorpay_signature;

    donation.status =
      'Verified';

    await donation.save();

    /*
    |--------------------------------------------------------------------------
    | Email Notification
    |--------------------------------------------------------------------------
    */

    const recipientEmail =
      getRecipientEmail();

    if (recipientEmail) {

      try {

        await sendEmail({

          to:
            recipientEmail,

          replyTo:
            donation.email,

          subject:
            `💰 Donation Received - ₹${donation.amount}`,

          html: `
            <!DOCTYPE html>

            <html>

            <body style="
              font-family: Arial, sans-serif;
              background: #f5f5f5;
              padding: 20px;
            ">

              <div style="
                max-width: 650px;
                margin: auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #ddd;
              ">

                <!-- Header -->

                <div style="
                  background: #16a34a;
                  color: white;
                  padding: 25px;
                ">

                  <h2 style="
                    margin: 0;
                  ">

                    💰 Donation Received

                  </h2>

                  <p style="
                    margin-bottom: 0;
                  ">

                    Razorpay payment has been
                    successfully verified.

                  </p>

                </div>

                <!-- Details -->

                <div style="
                  padding: 25px;
                ">

                  <h3>
                    Donation Details
                  </h3>

                  <p>

                    <strong>
                      Donor:
                    </strong>

                    ${donation.donorName}

                  </p>

                  <p>

                    <strong>
                      Email:
                    </strong>

                    ${donation.email}

                  </p>

                  <p>

                    <strong>
                      Phone:
                    </strong>

                    ${donation.phone || 'N/A'}

                  </p>

                  <p>

                    <strong>
                      Amount:
                    </strong>

                    ₹${donation.amount}

                  </p>

                  <p>

                    <strong>
                      Donation Type:
                    </strong>

                    ${donation.type}

                  </p>

                  <p>

                    <strong>
                      Payment Method:
                    </strong>

                    Razorpay

                  </p>

                  <p>

                    <strong>
                      Razorpay Order ID:
                    </strong>

                    ${donation.razorpayOrderId}

                  </p>

                  <p>

                    <strong>
                      Razorpay Payment ID:
                    </strong>

                    ${donation.razorpayPaymentId}

                  </p>

                  <div style="
                    margin-top: 20px;
                    padding: 15px;
                    background: #ecfdf5;
                    border-left: 4px solid #16a34a;
                    border-radius: 5px;
                  ">

                    <strong>
                      Status:
                    </strong>

                    Verified

                  </div>

                  <p style="
                    color: #666;
                    font-size: 13px;
                    margin-top: 25px;
                  ">

                    This email was automatically
                    generated by the AASHIANA
                    Foundation website.

                  </p>

                </div>

              </div>

            </body>

            </html>
          `,

          text: `
Donation Received

Donor:
${donation.donorName}

Email:
${donation.email}

Phone:
${donation.phone || 'N/A'}

Amount:
₹${donation.amount}

Donation Type:
${donation.type}

Payment Method:
Razorpay

Razorpay Order ID:
${donation.razorpayOrderId}

Razorpay Payment ID:
${donation.razorpayPaymentId}

Status:
Verified
          `

        });

        console.log(
          '📧 Donation email sent successfully.'
        );

      } catch (emailError) {

        console.error(
          '⚠️ Donation email error:',
          emailError.message
        );

        // Payment is already verified.
        // Email failure must NOT change payment status.

      }

    } else {

      console.error(
        '⚠️ Donation recipient email is not configured.'
      );

    }

    /*
    |--------------------------------------------------------------------------
    | Success Response
    |--------------------------------------------------------------------------
    */

    return res.status(200).json({

      success: true,

      message:
        'Payment verified successfully.',

      donationId:
        donation._id,

      status:
        donation.status

    });

  } catch (error) {

    console.error(
      '❌ Razorpay Verification Error:',
      error
    );

    return res.status(500).json({

      success: false,

      error:
        'Failed to verify payment.'

    });

  }

});


/*
|--------------------------------------------------------------------------
| ADMIN AUTHENTICATION
|--------------------------------------------------------------------------
*/

const checkAdminKey = (req, res, next) => {

  const adminKey =
    req.headers['x-admin-key'];

  if (
    !adminKey ||
    adminKey !==
    process.env.ADMIN_API_KEY
  ) {

    return res.status(401).json({

      success: false,

      error:
        'Unauthorized.'

    });

  }

  next();

};


/*
|--------------------------------------------------------------------------
| GET /api/donations/admin
|--------------------------------------------------------------------------
| Get donations for admin panel
|--------------------------------------------------------------------------
*/

router.get(
  '/admin',
  checkAdminKey,
  async (req, res) => {

    try {

      const donations =
        await Donation
          .find()
          .sort({
            createdAt: -1
          });

      return res.json({

        success: true,

        data:
          donations

      });

    } catch (error) {

      console.error(
        'Fetch donations error:',
        error
      );

      return res.status(500).json({

        success: false,

        error:
          'Failed to fetch donations.'

      });

    }

  }
);


/*
|--------------------------------------------------------------------------
| PATCH /api/donations/admin/:id
|--------------------------------------------------------------------------
| Verify or reject donation manually
|--------------------------------------------------------------------------
*/

router.patch(
  '/admin/:id',
  checkAdminKey,
  async (req, res) => {

    try {

      const {
        status,
        adminNote
      } = req.body;

      if (
        ![
          'Pending',
          'Verified',
          'Rejected'
        ].includes(status)
      ) {

        return res.status(400).json({

          success: false,

          error:
            'Invalid donation status.'

        });

      }

      const donation =
        await Donation.findByIdAndUpdate(

          req.params.id,

          {
            status,

            adminNote:
              adminNote || ''
          },

          {
            new: true
          }

        );

      if (!donation) {

        return res.status(404).json({

          success: false,

          error:
            'Donation not found.'

        });

      }

      return res.json({

        success: true,

        message:
          `Donation marked as ${status}.`,

        data:
          donation

      });

    } catch (error) {

      console.error(
        'Update donation error:',
        error
      );

      return res.status(500).json({

        success: false,

        error:
          'Failed to update donation.'

      });

    }

  }
);


/*
|--------------------------------------------------------------------------
| EXPORT ROUTER
|--------------------------------------------------------------------------
*/

module.exports = router;