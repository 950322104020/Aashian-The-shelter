
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const Volunteer = require('../models/Volunteer');

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
| Verify Email Configuration
|--------------------------------------------------------------------------
*/

transporter.verify((error) => {
  if (error) {
    console.error(
      '⚠️ Volunteer Email Configuration Error:',
      error.message
    );
  } else {
    console.log('📧 Volunteer email transporter is ready');
  }
});

/*
|--------------------------------------------------------------------------
| POST /api/volunteers
|--------------------------------------------------------------------------
| Save volunteer + send email
|--------------------------------------------------------------------------
*/

router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      interest,
      message
    } = req.body;

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (!name || !email || !phone || !city) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, phone and city are required.'
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Save Volunteer to MongoDB
    |--------------------------------------------------------------------------
    */

    const volunteer = await Volunteer.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city: city.trim(),
      interest: interest?.trim() || 'Community Outreach',
      message: message?.trim() || '',
      status: 'Pending'
    });

    /*
    |--------------------------------------------------------------------------
    | Email Recipient
    |--------------------------------------------------------------------------
    */

    const recipientEmail =
      process.env.CLIENT_RECEIVER_EMAIL ||
      process.env.EMAIL_USER;

    /*
    |--------------------------------------------------------------------------
    | Send Email Notification
    |--------------------------------------------------------------------------
    */

    const mailOptions = {
      from: `"AASHIANA Foundation Website" <${process.env.EMAIL_USER}>`,

      to: recipientEmail,

      replyTo: email,

      subject: `❤️ New Volunteer Application - ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Volunteer Application</title>
        </head>

        <body style="
          margin: 0;
          padding: 20px;
          background: #f5f5f5;
          font-family: Arial, Helvetica, sans-serif;
        ">

          <div style="
            max-width: 650px;
            margin: auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
          ">

            <div style="
              background: #16a34a;
              padding: 25px;
              color: white;
            ">

              <h1 style="
                margin: 0;
                font-size: 24px;
              ">
                New Volunteer Application
              </h1>

              <p style="
                margin: 8px 0 0;
                opacity: 0.9;
              ">
                A new volunteer has registered through your website.
              </p>

            </div>

            <div style="padding: 25px;">

              <h2 style="
                color: #1f2937;
                margin-top: 0;
              ">
                Volunteer Details
              </h2>

              <table style="
                width: 100%;
                border-collapse: collapse;
              ">

                <tr>
                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    font-weight: bold;
                    width: 35%;
                  ">
                    Name
                  </td>

                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                  ">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    font-weight: bold;
                  ">
                    Email
                  </td>

                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                  ">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    font-weight: bold;
                  ">
                    Phone
                  </td>

                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                  ">
                    ${phone}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    font-weight: bold;
                  ">
                    City
                  </td>

                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                  ">
                    ${city}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    font-weight: bold;
                  ">
                    Interest
                  </td>

                  <td style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                  ">
                    ${interest || 'Community Outreach'}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 10px;
                    font-weight: bold;
                    vertical-align: top;
                  ">
                    Message
                  </td>

                  <td style="padding: 10px;">
                    ${message || 'No message provided'}
                  </td>
                </tr>

              </table>

              <div style="
                margin-top: 25px;
                padding: 15px;
                background: #fff7ed;
                border-left: 4px solid #f97316;
                border-radius: 5px;
              ">

                <strong>Status:</strong> Pending

              </div>

              <p style="
                margin-top: 25px;
                color: #6b7280;
                font-size: 13px;
              ">
                This email was automatically generated by the
                AASHIANA Foundation website.
              </p>

            </div>

          </div>

        </body>
        </html>
      `
    };

    /*
    |--------------------------------------------------------------------------
    | Send Email Notification (non-blocking)
    |--------------------------------------------------------------------------
    */

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailErr) {
      // Log but don't fail the request — volunteer is already saved
      console.error('⚠️ Volunteer email send failed:', emailErr.message);
    }

    /*
    |--------------------------------------------------------------------------
    | Success Response
    |--------------------------------------------------------------------------
    */

    return res.status(201).json({
      success: true,
      message: 'Volunteer application submitted successfully.',
      data: volunteer
    });

  } catch (error) {

    console.error(
      '❌ Volunteer Registration Error:',
      error
    );

    return res.status(500).json({
      success: false,
      error: 'Failed to submit volunteer application.'
    });
  }
});

/*
|--------------------------------------------------------------------------
| GET /api/volunteers
|--------------------------------------------------------------------------
| Get volunteers for admin panel
|--------------------------------------------------------------------------
*/

router.get('/', async (req, res) => {
  try {

    const volunteers = await Volunteer
      .find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: volunteers
    });

  } catch (error) {

    console.error(
      '❌ Fetch Volunteers Error:',
      error
    );

    return res.status(500).json({
      success: false,
      error: 'Failed to fetch volunteers.'
    });
  }
});

module.exports = router;

