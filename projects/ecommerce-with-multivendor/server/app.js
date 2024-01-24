/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const AppError = require('./utils/AppError');
const swaggerDocument = require('./swagger.json');

// ! internal dependencies
const userRouter = require('./routers/userRouter');
const errorController = require('./controllers/errorController');

// ! initialize app
const app = express();

// * middleware stack
// ! use morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// ! cors policy
app.use(
    cors({
        origin: '*',
    })
);
// ! body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ! set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));

// ! serving static file
app.use(express.static(path.join(__dirname, 'public')));

// ! mounted router
app.use('/api/v1/users', userRouter);

// ! swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ! global unhalder route handler
app.all('*', (req, _res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on thi server.`, 404));
});

// ! global error handler
app.use(errorController.globalHanlder);

// ! export app
module.exports = app;
