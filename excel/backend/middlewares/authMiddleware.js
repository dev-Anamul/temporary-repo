/* eslint-disable prefer-destructuring */
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const UserAccount = require('../models/user-account');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

// ! generate json web token
exports.protect = catchAsync(async (req, _res, next) => {
    // define token
    let token;

    // check if token is in the header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // check if token exists
    if (!token) {
        return next(new AppError('You are not logged in. Please login', 401));
    }

    // verify token
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // check if user exists
    const verifiedUser = await UserAccount.findById(decode.id);

    // check if user exists
    if (!verifiedUser) {
        return next(new AppError('The user belongs to this token no longer exists', 401));
    }

    // check if user changed password after the token was issued
    if (verifiedUser.changePasswordAfterCreateJwt(decode.iat)) {
        return next(new AppError('User recently changed the password. Please log in again', 401));
    }

    // grant access to protected route
    req.user = verifiedUser;
    next();
});
