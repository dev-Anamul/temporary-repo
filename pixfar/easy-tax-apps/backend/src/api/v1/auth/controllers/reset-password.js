/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils');
const authService = require('../../../../lib/auth');

const resetPassword = catchAsync(async (req, res) => {
    const { newPassword, confirmPassword, token, email } = req.body || {};

    await authService.resetPassword({ token, newPassword, confirmPassword, email });

    const response = {
        code: 200,
        status: 'success',
        message: 'Password reset successful. Please login with your new password',
        links: {
            self: req.originalUrl,
            login: '/api/v1/auth/login',
        },
    };

    res.status(200).json(response);
});

module.exports = { resetPassword };
