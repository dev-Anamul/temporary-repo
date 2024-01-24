/* eslint-disable import/no-extraneous-dependencies */
const winston = require('winston');

// Create a new Winston logger instance
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: 'error.log' })],
});

module.exports = logger;
