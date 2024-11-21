//models/user.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the Response schema

// Main user schema with embedded responses and assessments
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountType: {
    type: String,
    enum: ['seller', 'buyer'], // Limiting the account type to either 'seller' or 'buyer'
    required: true,
  },
});


// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
