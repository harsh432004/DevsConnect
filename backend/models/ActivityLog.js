// models/ActivityLog.js
const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  endpoint: { type: String, required: true },
  method: { type: String, required: true },
  responseTime: { type: String, required: true },
  timestamp: { type: Date, required: true },
  statusCode: { type: Number, required: true },
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
