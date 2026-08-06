// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const dns = require('dns');

const app = express();

// Custom DNS fallback for cloud cluster resolutions
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const { User, Program, Volunteer, Donation } = require('./models');

// Configure CORS for Vercel Frontend
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Ensure uploads folder exists locally
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use('/uploads', express.static(uploadDir));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🍃 MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Authentication Middleware
const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    req.user = decoded;
    next();
  });
};

/* ================= SYSTEM & ROOT ROUTES ================= */

// Base Root Route (Fixes "Cannot GET /")
app.get('/', (req, res) => {
  res.status(200).json({
    message: '🚀 Aashiana Foundation API is live and running!',
    status: 'Active',
    endpoints: {
      stats: '/api/stats',
      volunteers: '/api/volunteers (POST)',
      donations: '/api/donations (POST)',
      adminLogin: '/api/admin/login (POST)'
    }
  });
});

// Healthcheck Route for Render monitoring
app.get('/health', (req, res) => res.status(200).send('OK'));

/* ================= PUBLIC API ENDPOINTS ================= */

// Get Platform Metrics
app.get('/api/stats', async (req, res) => {
  try {
    const totalDonations = await Donation.countDocuments({ status: 'completed' });
    const totalVolunteers = await Volunteer.countDocuments({ status: 'approved' });
    res.json({
      yearsActive: '20+',
      livesImpacted: '10,000+',
      healthCamps: '150+',
      volunteersCount: totalVolunteers || 500,
      totalDonations: totalDonations || 1200
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post Volunteer Application
app.post('/api/volunteers', upload.single('resume'), async (req, res) => {
  try {
    const { fullName, email, phone, city, skills } = req.body;
    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const newVolunteer = new Volunteer({ fullName, email, phone, city, skills, resumeUrl });
    await newVolunteer.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Record Donation
app.post('/api/donations', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ message: 'Donation recorded successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= ADMIN API ENDPOINTS ================= */

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin Metrics Overview
app.get('/api/admin/metrics', verifyAdmin, async (req, res) => {
  try {
    const donations = await Donation.aggregate([{ $match: { status: 'completed' } }, { $group: { _id: null, total: { $sum: '$amount' } } }]);
    const pendingVolunteers = await Volunteer.countDocuments({ status: 'pending' });
    const activePrograms = await Program.countDocuments({ isActive: true });

    res.json({
      totalRaised: donations[0]?.total || 0,
      pendingVolunteers,
      activePrograms
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 MERN Server running on port ${PORT}`));