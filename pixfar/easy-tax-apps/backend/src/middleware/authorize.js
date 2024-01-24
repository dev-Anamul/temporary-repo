/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
const { AppError } = require('../utils');

const authorize =
    (...roles) =>
    (req, _res, next) => {
        // if logged in user is superadmin then he can access all routes
        if (req.user.role === 'superadmin' || req.user.role === 'admin') return next();

        // if logged in user is not superadmin then check if he has the required role
        if (!roles.includes(req.user.role) || req.user.status !== 'approved') {
            console.log(req.user);
            return next(
                new AppError('You have No permission to perform this task', 403, 'Forbidden')
            );
        }

        // if logged in user has the required role then he can access the route
        return next();
    };

module.exports = { authorize };
