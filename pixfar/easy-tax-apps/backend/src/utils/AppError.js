class AppError extends Error {
    constructor(message, statusCode, name) {
        super(message);

        this.status = statusCode;
        this.isOperational = true;
        this.cusText = name || 'AppError';

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { AppError };
