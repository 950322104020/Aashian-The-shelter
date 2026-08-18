const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');

require('dotenv').config();

const volunteerRoutes = require('./routes/volunteer');
const donationRoutes = require('./routes/donation');

const { sendEmail } = require('./utils/email');

const app = express();

/*
|--------------------------------------------------------------------------
| DNS
|--------------------------------------------------------------------------
*/

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
]);

/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
*/

const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {

      // Allow requests without origin
      // such as Postman/server-side requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log('⚠️ CORS blocked origin:', origin);

      return callback(
        new Error('Not allowed by CORS')
      );
    },

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

/*
|--------------------------------------------------------------------------
| Body Parser
|--------------------------------------------------------------------------
*/

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

/*
|--------------------------------------------------------------------------
| MongoDB
|--------------------------------------------------------------------------
*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      '🍃 MongoDB Connected Successfully'
    );

  })
  .catch((error) => {

    console.error(
      '❌ MongoDB Connection Error:',
      error
    );

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
      phone,
      subject,
      message
    } = req.body;

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (!name || !email || !message) {

      return res.status(400).json({
        success: false,
        error: 'Name, email and message are required.'
      });

    }

    /*
    |--------------------------------------------------------------------------
    | Email Recipient
    |--------------------------------------------------------------------------
    */

    const recipientEmail =
      process.env.CLIENT_RECEIVER_EMAIL ||
      process.env.EMAIL_USER;

    if (!recipientEmail) {

      console.error(
        '❌ CLIENT_RECEIVER_EMAIL and EMAIL_USER are both missing.'
      );

      return res.status(500).json({
        success: false,
        error: 'Email recipient is not configured.'
      });

    }

    /*
    |--------------------------------------------------------------------------
    | Send Contact Email
    |--------------------------------------------------------------------------
    */

    await sendEmail({

      to: recipientEmail,

      replyTo: email,

      subject:
        subject
          ? `📩 ${subject} - ${name}`
          : `📩 New Contact Inquiry - ${name}`,

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
            padding: 25px;
            border: 1px solid #ddd;
          ">

            <h2 style="
              color: #16a34a;
            ">
              📩 New Contact Message
            </h2>

            <hr>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || 'N/A'}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject || 'No Subject'}
            </p>

            <h3>
              Message
            </h3>

            <div style="
              background: #f3f4f6;
              padding: 15px;
              border-radius: 8px;
            ">

              ${message}

            </div>

            <p style="
              margin-top: 25px;
              color: #777;
              font-size: 13px;
            ">

              This message was sent from
              the AASHIANA website.

            </p>

          </div>

        </body>

        </html>
      `,

      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'No Subject'}

Message:
${message}
`

    });

    /*
    |--------------------------------------------------------------------------
    | Success
    |--------------------------------------------------------------------------
    */

    console.log(
      `📧 Contact email sent successfully to ${recipientEmail}`
    );

    return res.status(200).json({

      success: true,

      message:
        'Message sent successfully!'

    });

  } catch (error) {

    /*
    |--------------------------------------------------------------------------
    | Email Error
    |--------------------------------------------------------------------------
    */

    console.error(
      '❌ Contact email error:',
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

      contact:
        'POST /api/contact',

      volunteers:
        'POST /api/volunteers',

      donations:
        'POST /api/donations'

    }

  });

});

/*
|--------------------------------------------------------------------------
| HEALTH
|--------------------------------------------------------------------------
*/

app.get('/health', (req, res) => {

  res.status(200).json({

    success: true,

    message:
      'Backend is healthy'

  });

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