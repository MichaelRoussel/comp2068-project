const mongoose = require('mongoose');

// Our Schema
const PhoneSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  specifications: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Phone', PhoneSchema);