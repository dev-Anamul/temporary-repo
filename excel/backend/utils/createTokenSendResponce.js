/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

// ! generate json web token
const jwtToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    });
    return token;
};

// ! genarate token and send response to the user
const createTokenSendResponse = (user, statusCode, res) => {
    const returnUser = user;
    returnUser.__v = undefined;
    const token = jwtToken(user._id);
    res.status(statusCode).json({
        status: 'success',
        token,
        authToken: `Bearer ${token}`,
        data: {
            user: returnUser,
        },
    });
};

module.exports = createTokenSendResponse;
