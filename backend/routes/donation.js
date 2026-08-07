const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure Nodemailer Transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Client's Gmail address from .env
    pass: process.env.EMAIL_PASS, // Client's 16-character App Password from .env
  },
});

/**
 * @route   POST /api/donation/notify
 * @desc    Sends a donation confirmation alert/pledge email to the client
 * @access  Public
 */
router.post('/notify', async (req, res) => {
  const { donorName, email, phone, amount, transactionId, paymentMethod, note } = req.body;

  // Basic validation
  if (!donorName || !amount) {
    return res.status(400).json({ 
      success: false, 
      message: 'Donor name and donation amount are required.' 
    });
  }

  // Email template formatted with clean inline CSS
  const mailOptions = {
    from: `"Aashiana Website" <${process.env.EMAIL_USER}>`,
    to: process.env.CLIENT_RECEIVER_EMAIL, // Client's email receiving alerts
    replyTo: email || process.env.EMAIL_USER,
    subject: `❤️ New Donation Alert: ₹${amount} from${donorName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #27ae60; border-radius: 8px; overflow: hidden; color: #333;">
        <div style="background-color: #27ae60; padding: 16px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">Aashiana - New Donation Alert</h2>
        </div>
        
        <div style="padding: 20px; line-height: 1.6;">
          <p style="font-size: 16px; margin-top: 0;">You have received a new donation notification from the website!</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Donor Name:</td>
              <td style="padding: 8px 0;">${donorName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Amount:</td>
              <td style="padding: 8px 0; color: #27ae60; font-weight: bold; font-size: 18px;">₹${amount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${email || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Payment Method:</td>
              <td style="padding: 8px 0;">${paymentMethod || 'UPI / QR Code / Bank Transfer'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Transaction / Ref ID:</td>
              <td style="padding: 8px 0;">${transactionId || 'N/A'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 12px; border-radius: 6px;">
            <p style="margin: 0; font-weight: bold;">Note / Message from Donor:</p>
            <p style="margin: 5px 0 0 0; color: #555;">${note || 'No note attached.'}</p>
          </div>
        </div>

        <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
          This email was generated automatically by the Aashiana website donation form.
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: 'Donation notification submitted successfully!' 
    });
  } catch (error) {
    console.error('Nodemailer Error (Donation Route):', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send donation notification. Server error.' 
    });
  }
});

module.exports = router;