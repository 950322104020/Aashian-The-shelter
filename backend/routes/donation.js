const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const Donation = require('../models/Donation');

/*
|--------------------------------------------------------------------------
| UPI DETAILS
|--------------------------------------------------------------------------
*/

const UPI_ID = 'shyamzacx@axl';

/*
|--------------------------------------------------------------------------
| Email Transporter
|--------------------------------------------------------------------------
*/

const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/*
|--------------------------------------------------------------------------
| POST /api/donations
|--------------------------------------------------------------------------
| Submit donation after UPI payment
|--------------------------------------------------------------------------
*/

router.post('/', async (req, res) => {
  try {
    const {
      donorName,
      email,
      phone,
      amount,
      type,
      paymentMethod,
      utr
    } = req.body;

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (!donorName || !email || !amount || !utr) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, amount and UTR are required.'
      });
    }

    const donationAmount = Number(amount);

    if (!Number.isFinite(donationAmount) || donationAmount <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid donation amount.'
      });
    }

    if (String(utr).trim().length < 6) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid UTR / transaction ID.'
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Check Duplicate UTR
    |--------------------------------------------------------------------------
    */

    const existingDonation = await Donation.findOne({
      utr: String(utr).trim()
    });

    if (existingDonation) {
      return res.status(409).json({
        success: false,
        error: 'This UTR / transaction ID has already been submitted.'
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Save Donation
    |--------------------------------------------------------------------------
    */

    const donation = await Donation.create({
      donorName: donorName.trim(),

      email: email.trim(),

      phone: phone?.trim() || '',

      amount: donationAmount,

      type: type === 'monthly'
        ? 'monthly'
        : 'one-time',

      paymentMethod:
        paymentMethod || 'UPI',

      upiId: UPI_ID,

      utr: String(utr).trim(),

      status: 'Pending'
    });

    /*
    |--------------------------------------------------------------------------
    | Email Notification
    |--------------------------------------------------------------------------
    */

    const recipientEmail =
      process.env.CLIENT_RECEIVER_EMAIL ||
      process.env.EMAIL_USER;

    try {
      await transporter.sendMail({
        from: `"AASHIANA Foundation Website" <${process.env.EMAIL_USER}>`,

        to: recipientEmail,

        replyTo: email,

        subject:
          `💰 New Donation Pending Verification - ₹${donationAmount}`,

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
            ">

              <div style="
                background: #16a34a;
                color: white;
                padding: 25px;
              ">

                <h2 style="margin: 0;">
                  💰 New Donation Received
                </h2>

                <p style="margin-bottom: 0;">
                  Payment is awaiting verification.
                </p>

              </div>

              <div style="padding: 25px;">

                <h3>Donation Details</h3>

                <p>
                  <strong>Donor:</strong>
                  ${donorName}
                </p>

                <p>
                  <strong>Email:</strong>
                  ${email}
                </p>

                <p>
                  <strong>Amount:</strong>
                  ₹${donationAmount}
                </p>

                <p>
                  <strong>Donation Type:</strong>
                  ${type || 'one-time'}
                </p>

                <p>
                  <strong>Payment Method:</strong>
                  ${paymentMethod || 'UPI'}
                </p>

                <p>
                  <strong>UPI ID:</strong>
                  ${UPI_ID}
                </p>

                <p>
                  <strong>UTR / Transaction ID:</strong>
                  <span style="
                    font-weight: bold;
                    color: #16a34a;
                  ">
                    ${utr}
                  </span>
                </p>

                <div style="
                  margin-top: 20px;
                  padding: 15px;
                  background: #fff7ed;
                  border-left: 4px solid #f97316;
                ">

                  <strong>Status:</strong> Pending Verification

                </div>

                <p style="
                  color: #666;
                  font-size: 13px;
                  margin-top: 25px;
                ">
                  Please verify this UTR in the PhonePe/bank account
                  before marking the donation as Verified.
                </p>

              </div>

            </div>

          </body>

          </html>
        `
      });

    } catch (emailError) {
      console.error(
        'Donation email error:',
        emailError
      );

      // Donation is still saved even if email fails.
    }

    /*
    |--------------------------------------------------------------------------
    | Response
    |--------------------------------------------------------------------------
    */

    return res.status(201).json({
      success: true,
      message:
        'Donation submitted successfully. Your payment will be verified by our team.',
      donationId: donation._id,
      status: donation.status
    });

  } catch (error) {

    console.error(
      'Donation submission error:',
      error
    );

    return res.status(500).json({
      success: false,
      error: 'Failed to submit donation.'
    });
  }
});


/*
|--------------------------------------------------------------------------
| ADMIN AUTHENTICATION
|--------------------------------------------------------------------------
*/

const checkAdminKey = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'];

  if (
    !adminKey ||
    adminKey !== process.env.ADMIN_API_KEY
  ) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized.'
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

      const donations = await Donation
        .find()
        .sort({ createdAt: -1 });

      return res.json({
        success: true,
        data: donations
      });

    } catch (error) {

      console.error(
        'Fetch donations error:',
        error
      );

      return res.status(500).json({
        success: false,
        error: 'Failed to fetch donations.'
      });
    }
  }
);


/*
|--------------------------------------------------------------------------
| PATCH /api/donations/admin/:id
|--------------------------------------------------------------------------
| Verify or reject donation
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
        !['Pending', 'Verified', 'Rejected']
          .includes(status)
      ) {
        return res.status(400).json({
          success: false,
          error: 'Invalid donation status.'
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
          error: 'Donation not found.'
        });
      }

      return res.json({
        success: true,
        message:
          `Donation marked as ${status}.`,
        data: donation
      });

    } catch (error) {

      console.error(
        'Update donation error:',
        error
      );

      return res.status(500).json({
        success: false,
        error: 'Failed to update donation.'
      });
    }
  }
);


module.exports = router;