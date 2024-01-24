/* eslint-disable consistent-return */
const { AppError } = require('./utils');

// ! send error message in development
const sendErrorDev = (error, res) => {
    res.status(error.statusCode).json({
        code: error.statusCode,
        status: error.status,
        message: error.message,
        stacktrace: error.stack,
        error,
    });
};

// ! handle jwt token error
const handleJwtError = (err) => {
    const message = `${err.message}. Please login again`;
    return new AppError(message, 401);
};

// ! handle jwt expired error
const handleJwtExpiredError = () => new AppError('Your token is expired. Please login again', 401);

// ! handle duplicate key error
const handleDuplicateFields = (err) => {
    const message = `Duplicate fields Value : ${Object.keys(err.keyValue)} => ${
        err.keyValue[Object.keys(err.keyValue)]
    }`;
    return new AppError(message, 400);
};
// ! handle cast error
const handleCastError = (err) => {
    const message = `Invalid ${err.path} : ${err.value}`;
    return new AppError(message, 400);
};
// ! handle validation error
const handleValidationError = (err) => {
    const message = `${err.message}`;
    return new AppError(message, 400);
};
// ! send error message in production
const sendErrorProd = (error, res) => {
    if (error.isOperational) {
        res.status(error.statusCode).json({
            code: error.statusCode,
            status: error.status,
            message: error.message,
        });
    } else {
        // ! error log to the console in production mode
        console.error('error 💥💥', error);

        // ! give response to the client in the production mode
        res.status(500).json({
            code: 500,
            status: 'error',
            message: 'Something went very wrong..',
        });
    }
};
// ! global handler
// eslint-disable-next-line no-unused-vars
const globalHandler = (err, _req, res, _next) => {
    // ! set default error
    let error = err;
    error.statusCode = err.statusCode || 500;
    error.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(error, res);
    }
    if (process.env.NODE_ENV === 'production') {
        if (error.name === 'CastError') {
            error = handleCastError(error);
        }
        if (error.code === 11000) {
            error = handleDuplicateFields(error);
        }
        if (error.name === 'ValidationError') {
            error = handleValidationError(error);
        }
        if (error.name === 'JsonWebTokenError') {
            error = handleJwtError(error);
        }
        if (error.name === 'TokenExpiredError') {
            error = handleJwtExpiredError(error);
        }
        sendErrorProd(error, res);
    }
};
// export global handler
// eslint-disable-next-line no-unused-vars
exports.globalHandler = (err, req, res, _next) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(err);
        console.log(err.status);
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.name);
    }

    if (err.name === 'Bad Request') {
        const formattedError = err.errors.map((error) => {
            const pathArray = error.path?.split('/');
            return {
                message: error.message,
                path: pathArray?.[pathArray.length - 1],
            };
        });

        return res.status(err.status).json({
            code: err.status,
            status: 'Bad Request',
            errors: formattedError,
        });
    }

    if (err.name === 'ValidationError') {
        const formattedError = Object.keys(err.errors).map((key) => ({
            message: err.errors[key].message,
            path: key,
        }));

        return res.status(400).json({
            code: 400,
            status: 'Bad Request',
            errors: formattedError,
        });
    }

    if (err.name === 'CastError') {
        const message = `Invalid ${err.path} : ${err.value}`;
        return res.status(400).json({
            code: 400,
            status: 'Bad Request',
            errors: message,
        });
    }

    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            code: 401,
            status: 'Unauthorized',
            message: 'Invalid token. Please login first.',
            // customMsg: `${err.message}. Please login first.`,
        });
    }

    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
            code: 401,
            status: 'Unauthorized',
            message: 'Your token is expired. Please login again',
        });
    }

    if (err.code === 11000) {
        const message = `Duplicate fields Value : ${Object.keys(err.keyValue)} ${
            err.keyValue[Object.keys(err.keyValue)]
        }`;
        return res.status(400).json({
            code: 400,
            status: 'Bad Request',
            errors: message,
        });
    }

    // if (err.name === 'MongoError') {
    //     return res.status(400).json({
    //         code: 400,
    //         status: 'Bad Request',
    //         message: err.message,
    //     });
    // }

    if (err.name === 'MulterError') {
        return res.status(400).json({
            code: 400,
            status: 'Bad Request',
            message: err.message,
        });
    }

    // if (err.name === 'AppError') {
    //     return res.status(err.statusCode).json({
    //         code: err.statusCode,
    //         status: err.status,
    //         message: err.message,
    //     });
    // }

    if (err.isOperational) {
        return res.status(err.status).json({
            code: err.status,
            status: err.cusText,
            message: err.message,
        });
    }

    return res.status(err.status || 500).json({
        code: err.status || 500,
        status: err.name || 'Server Error',
        message: err.message || 'Something went wrong. Please try again later.',
    });
};
