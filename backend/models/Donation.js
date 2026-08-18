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
      default: 'Razorpay'
    },

    /*
    |--------------------------------------------------------------------------
    | Manual UPI / Bank Transfer
    |--------------------------------------------------------------------------
    */

    upiId: {
      type: String,
      default: 'shyamzacx@axl'
    },

    utr: {
      type: String,
      trim: true,
      default: ''
    },

    /*
    |--------------------------------------------------------------------------
    | Razorpay
    |--------------------------------------------------------------------------
    */

    razorpayOrderId: {
      type: String,
      trim: true,
      default: ''
    },

    razorpayPaymentId: {
      type: String,
      trim: true,
      default: ''
    },

    razorpaySignature: {
      type: String,
      trim: true,
      default: ''
    },

    /*
    |--------------------------------------------------------------------------
    | Donation Status
    |--------------------------------------------------------------------------
    */

    status: {
      type: String,
      enum: [
        'Pending',
        'Verified',
        'Rejected',
        'Failed'
      ],
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