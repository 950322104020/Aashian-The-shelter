// Centralized model exports for backend
const User = require('./models/User');
const Volunteer = require('./models/Volunteer');
const Donation = require('./models/Donation');
const Message = require('./models/Contact');
const Program = require('./models/Program');

module.exports = { User, Volunteer, Donation, Message, Program };
