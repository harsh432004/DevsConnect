// middleware/logger.js
const analyticsLogger = (req, res, next) => {
    const start = Date.now();
  
    res.on('finish', () => {
      const log = {
        endpoint: req.originalUrl,
        method: req.method,
        responseTime: Date.now() - start + 'ms',
        timestamp: new Date(),
        statusCode: res.statusCode,
      };
  
      // Save the log to the database
      const ActivityLog = require('../models/ActivityLog'); // Import model here
      const activityLog = new ActivityLog(log);
      activityLog.save().catch(err => console.error('Error saving log:', err));
    });
  
    next();
  };
  
  module.exports = analyticsLogger;
  