// External dependencies
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Internal dependencies
const middlewares = require('./middleware');
const routes = require('../routes');
const globalErrorHandler = require('../middlewares/global-error');

// configure environment variables
dotenv.config();

// create express app
const app = express();

// Middlewares
app.use(middlewares);

//  set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));

// consume static files
app.use(express.static(path.join(__dirname, 'public')));

// mount routes
app.use(routes);

//  global error handler
app.use(globalErrorHandler.globalHanlder);

// export app
module.exports = app;
