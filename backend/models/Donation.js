const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    phone: {
      type: String,
      trim: true,
      default: ''
    },

    amount: {
      type: Number,
      required: true,
      min: 1
    },

    type: {
      type: String,
      enum: ['one-time', 'monthly'],
      default: 'one-time'
    },

    paymentMethod: {
      type: String,
      default: 'UPI'
    },

    upiId: {
      type: String,
      default: 'shyamzacx@axl'
    },

    utr: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ['Pending', 'Verified', 'Rejected'],
      default: 'Pending'
    },

    adminNote: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.models.Donation ||
  mongoose.model('Donation', donationSchema);