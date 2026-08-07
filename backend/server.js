// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const dns = require('dns');

const app = express();

// Custom DNS fallback for cloud cluster resolutions
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Configure CORS for frontend access
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🍃 MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Configure Nodemailer Transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Client's Gmail address from .env
    pass: process.env.EMAIL_PASS, // Client's 16-character App Password from .env
  },
});

// Verify Nodemailer setup on server startup
transporter.verify((error) => {
  if (error) {
    console.error('⚠️ Nodemailer Configuration Error:', error.message);
  } else {
    console.log('📧 Nodemailer Transporter is ready to send emails');
  }
});

/* ================= SYSTEM & ROOT ROUTES ================= */

// Base Root Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: '🚀 Aashiana Foundation API is live and running!',
    status: 'Active',
    endpoints: {
      stats: '/api/stats (GET)',
      donations: '/api/donations (POST)',
      contact: '/api/contact (POST)'
    }
  });
});

// Healthcheck Route for Render monitoring
app.get('/health', (req, res) => res.status(200).send('OK'));

/* ================= PUBLIC API ENDPOINTS ================= */

// Get Platform Metrics
app.get('/api/stats', (req, res) => {
  res.json({
    yearsActive: '20+',
    livesImpacted: '10,000+',
    healthCamps: '150+',
    volunteersCount: 500,
    totalDonations: 1200
  });
});

// Post Contact Inquiry (Sends Email via Nodemailer)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please provide name, email, and message.' });
    }

    const recipientEmail = process.env.CLIENT_RECEIVER_EMAIL || process.env.EMAIL_USER;

    const mailOptions = {
      from: `"Aashiana Website" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: subject ? `📩 ${subject} (from ${name})` : `📩 New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; color: #333;">
          <h2 style="color: #2c3e50; margin-top: 0;">New Website Message - Aashiana</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f4f6f7; padding: 12px; border-radius: 4px; line-height: 1.5;">${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact email error:', err);
    res.status(500).json({ error: 'Failed to send contact email. Please try again later.' });
  }
});

// Record Donation & Send Email Alert (Nodemailer)
app.post('/api/donations', async (req, res) => {
  try {
    const { donorName, name, email, phone, amount, transactionId, paymentMethod, note } = req.body;
    const finalDonorName = donorName || name || 'Anonymous Donor';

    if (!amount) {
      return res.status(400).json({ success: false, error: 'Donation amount is required.' });
    }

    const recipientEmail = process.env.CLIENT_RECEIVER_EMAIL || process.env.EMAIL_USER;

    const mailOptions = {
      from: `"Aashiana Website" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email || process.env.EMAIL_USER,
      subject: `❤️ New Donation Alert: ₹${amount} from ${finalDonorName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #27ae60; border-radius: 8px; color: #333;">
          <h2 style="color: #27ae60; margin-top: 0;">New Donation Alert - Aashiana</h2>
          <p><strong>Donor Name:</strong> ${finalDonorName}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Amount:</strong> <span style="color: #27ae60; font-weight: bold; font-size: 18px;">₹${amount}</span></p>
          <p><strong>Payment Method:</strong> ${paymentMethod || 'UPI / Bank Transfer'}</p>
          <p><strong>Transaction / Ref ID:</strong> ${transactionId || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Note / Message:</strong></p>
          <p style="background: #f9f9f9; padding: 12px; border-radius: 4px; line-height: 1.5;">${note || 'No note attached.'}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ success: true, message: 'Donation alert sent successfully!' });
  } catch (err) {
    console.error('Donation email error:', err);
    res.status(500).json({ error: 'Failed to send donation alert email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 MERN Server running on port ${PORT}`));