const mongoose = require('mongoose');

// Our Schema
const MonitorSchema = new mongoose.Schema({
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
  resolution: {
    type: String,
    enum: ['1920x1080', '2560x1080', '2560x1440', '3440x1440', '3840x2160'],
    default: '1920x1080'
  },
  refresh_rate: {
    type: String,
    enum: ['60hz', '75hz', '120hz', '144hz'],
    default: '60hz'
  },
  screen_size: {
    type: String,
    enum: ['17in', '19in', '21in', '23in', '24in', '27in'],
    default: '21in'
  },
  aspect_ratio: {
    type: String,
    enum: ['4:3', '16:9', '21:9'],
    default: '16:9'
  },
  panel_type: {
    type: String,
    enum: ['IPS', 'VA', 'TN', 'OLED'],
    default: 'IPS'
  },
  additional_info: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Monitor', MonitorSchema);