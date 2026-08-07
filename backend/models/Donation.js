const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  donorName: { type: String },
  email: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed' },
  transactionId: { type: String, unique: true, sparse: true },
  note: { type: String },
  createdAt: { type: Date, default: Date.now }
});

DonationSchema.index({ transactionId: 1 }, { unique: true, partialFilterExpression: { transactionId: { $type: 'string' } } });

module.exports = mongoose.model('Donation', DonationSchema);
