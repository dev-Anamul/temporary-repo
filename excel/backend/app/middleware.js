// external dependencies
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

const middlewares = [
    morgan('dev'),
    cors({ origin: '*' }),
    express.json(),
    express.urlencoded({ extended: true }),
];

module.exports = middlewares;
