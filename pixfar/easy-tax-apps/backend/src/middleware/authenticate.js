/* eslint-disable prefer-destructuring */
const { verifyToken } = require('../lib/token');
const { getUserById } = require('../lib/user');
const { catchAsync, AppError } = require('../utils');

const authenticate = catchAsync(async (req, _res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You are not logged in. Please login', 401, 'Unauthorized'));
    }

    const decode = await verifyToken({ token });

    const verifiedUser = await getUserById(decode.id);

    if (!verifiedUser) {
        return next('The user belongs to this token no longer exists', 401, 'Unauthorized');
    }

    req.user = verifiedUser;

    return next();
});

module.exports = { authenticate };
