const signup = require('./signup');
const login = require('./login');
const forgotPassword = require('./forgot-password');
const resetPassword = require('./reset-password');
const updatePassword = require('./update-password');

module.exports = {
    ...signup,
    ...login,
    ...forgotPassword,
    ...resetPassword,
    ...updatePassword,
};
