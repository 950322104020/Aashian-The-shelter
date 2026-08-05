// backend/models.js
const mongoose = require('mongoose');

// User Schema (Admins)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' },
}, { timestamps: true });

// Program Schema
const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String },
  imageUrl: { type: String },
  impactCount: { type: String },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Volunteer Schema
const volunteerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  skills: { type: String },
  resumeUrl: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
}, { timestamps: true });

// Donation Schema
const donationSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['one-time', 'monthly'], default: 'one-time' },
  status: { type: String, enum: ['pending', 'completed'], default: 'completed' },
  isAnonymous: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', userSchema),
  Program: mongoose.model('Program', programSchema),
  Volunteer: mongoose.model('Volunteer', volunteerSchema),
  Donation: mongoose.model('Donation', donationSchema)
};