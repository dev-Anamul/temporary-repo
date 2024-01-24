const signup = require('./controllers/signup');
const login = require('./controllers/login');
const forgotPassword = require('./controllers/forgot-password');
const resetPassword = require('./controllers/reset-password');
const updatePassword = require('./controllers/update-password');
const updateProfile = require('./controllers/update-profile');
const getProfile = require('./controllers/get-profile');
const deleteAccount = require('./controllers/delete-account');

module.exports = {
    ...signup,
    ...login,
    ...forgotPassword,
    ...resetPassword,
    ...updatePassword,
    ...updateProfile,
    ...getProfile,
    ...deleteAccount,
};
