/* eslint-disable operator-linebreak */
const AppError = require('../utils/AppError');

// protected route
exports.restrictTo =
    // eslint-disable-next-line prettier/prettier
    (...roles) => (req, _res, next) => {
            if (!roles.includes(req.user.role)) {
                return next(new AppError('You have No permission to perform this task', 403));
            }
            next();
        };
