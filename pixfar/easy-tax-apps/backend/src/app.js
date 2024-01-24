const express = require('express');
const path = require('path');
const applyMiddleware = require('./middleware');
const routes = require('./routes');
const { globalHandler } = require('./error');

// initialize express app
const app = express();

// applyMiddleware
applyMiddleware(app);

// set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/template'));

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use(routes);

// health check
app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'OK',
    });
});

// unhandled routes
app.all('*', (req, res) => {
    const requestedUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.status(404).json({
        error: 'Not Found',
        message: `The requested URL, ${requestedUrl} , was not found on this server.`,
    });
});

// eslint-disable-next-line no-unused-vars
app.use(globalHandler);

module.exports = app;
