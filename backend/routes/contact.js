const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Setup Nodemailer Transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Client's Gmail
    pass: process.env.EMAIL_PASS, // Client's 16-character App Password
  },
});

// Endpoint 1: Contact Form
router.post('/contact-message', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  const mailOptions = {
    from: `"Aashiana Website" <${process.env.EMAIL_USER}>`,
    to: process.env.CLIENT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `📩 New Contact Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #2c3e50;">New Website Message - Aashiana</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p><strong>Message:</strong></p>
        <p style="background: #f4f6f7; padding: 12px; border-radius: 4px;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Nodemailer Contact Error:', error);
    res.status(500).json({ success: false, message: 'Server error. Failed to send message.' });
  }
});

// Endpoint 2: Donation Notification / Pledge
router.post('/donation-message', async (req, res) => {
  const { donorName, email, phone, amount, transactionId, note } = req.body;

  if (!donorName || !amount) {
    return res.status(400).json({ success: false, message: 'Donor name and amount are required.' });
  }

  const mailOptions = {
    from: `"Aashiana Website" <${process.env.EMAIL_USER}>`,
    to: process.env.CLIENT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `❤️ New Donation Alert: ₹${amount} from ${donorName}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #27ae60; border-radius: 8px;">
        <h2 style="color: #27ae60;">New Donation Notification - Aashiana</h2>
        <p><strong>Donor Name:</strong> ${donorName}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Transaction / Ref ID:</strong> ${transactionId || 'N/A'}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p><strong>Note/Message:</strong></p>
        <p style="background: #f4f6f7; padding: 12px; border-radius: 4px;">${note || 'No note provided.'}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Donation details submitted successfully!' });
  } catch (error) {
    console.error('Nodemailer Donation Error:', error);
    res.status(500).json({ success: false, message: 'Server error. Failed to send notification.' });
  }
});

module.exports = router;