const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: ''
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      default: 'admin'
    }
  },

  {
    timestamps: true
  }
);

module.exports =
  mongoose.models.User ||
  mongoose.model(
    'User',
    userSchema
  );