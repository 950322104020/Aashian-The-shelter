const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dns = require('dns');

require('dotenv').config();

const volunteerRoutes = require('./routes/volunteer');
const donationRoutes = require('./routes/donation');

const app = express();

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
]);

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: [
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE',
      'OPTIONS'
    ],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Admin-Key'
    ]
  })
);

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🍃 MongoDB Connected Successfully');
  })
  .catch((err) => {
    console.error(
      '❌ MongoDB Connection Error:',
      err
    );
  });

/*
|--------------------------------------------------------------------------
| Existing Contact Route
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
| CONTACT
|--------------------------------------------------------------------------
*/

app.post('/api/contact', async (req, res) => {

  try {

    const {
      name,
      email,
      subject,
      message
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error:
          'Please provide name, email, and message.'
      });
    }

    const recipientEmail =
      process.env.CLIENT_RECEIVER_EMAIL ||
      process.env.EMAIL_USER;

    await transporter.sendMail({

      from:
        `"Aashiana Website" <${process.env.EMAIL_USER}>`,

      to: recipientEmail,

      replyTo: email,

      subject:
        subject
          ? `📩 ${subject} (from ${name})`
          : `📩 New Contact Inquiry from ${name}`,

      html: `
        <div style="
          font-family: Arial;
          padding: 20px;
        ">

          <h2>
            New Website Message - Aashiana
          </h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject || 'No Subject'}
          </p>

          <hr>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

        </div>
      `
    });

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {

    console.error(
      'Contact email error:',
      error
    );

    return res.status(500).json({
      success: false,
      error:
        'Failed to send contact email.'
    });
  }
});


/*
|--------------------------------------------------------------------------
| API ROUTES
|--------------------------------------------------------------------------
*/

app.use(
  '/api/volunteers',
  volunteerRoutes
);

app.use(
  '/api/donations',
  donationRoutes
);


/*
|--------------------------------------------------------------------------
| STATS
|--------------------------------------------------------------------------
*/

app.get('/api/stats', (req, res) => {

  res.json({
    yearsActive: '20+',
    livesImpacted: '10,000+',
    healthCamps: '150+',
    volunteersCount: 500,
    totalDonations: 1200
  });

});


/*
|--------------------------------------------------------------------------
| ROOT
|--------------------------------------------------------------------------
*/

app.get('/', (req, res) => {

  res.json({
    message:
      '🚀 Aashiana Foundation API is live and running!',

    status: 'Active',

    endpoints: {
      contact: 'POST /api/contact',
      volunteers: 'POST /api/volunteers',
      donations: 'POST /api/donations'
    }
  });

});


/*
|--------------------------------------------------------------------------
| HEALTH
|--------------------------------------------------------------------------
*/

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


/*
|--------------------------------------------------------------------------
| 404
|--------------------------------------------------------------------------
*/

app.use((req, res) => {

  res.status(404).json({
    success: false,
    error:
      `Route not found: ${req.method} ${req.originalUrl}`
  });

});


/*
|--------------------------------------------------------------------------
| START SERVER
|--------------------------------------------------------------------------
*/

const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  '0.0.0.0',
  () => {
    console.log(
      `🚀 MERN Server running on port ${PORT}`
    );
  }
);