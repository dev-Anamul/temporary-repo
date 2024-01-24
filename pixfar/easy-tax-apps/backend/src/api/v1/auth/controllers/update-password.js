const { catchAsync, compareHash, AppError } = require('../../../../utils');
const authService = require('../../../../lib/auth');

const updatePassword = catchAsync(async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body || {};

    // check if user id logged in or not
    if (!req.user) return next(new AppError('You are not logged in', 401, 'Unauthorized'));

    // verify old password
    const isPasswordCorrect = await compareHash(oldPassword, req.user.password);
    if (!isPasswordCorrect) {
        return next(new AppError('Invalid current password', 400, 'Bad Request'));
    }

    // check new password and confirm password
    if (newPassword !== confirmPassword) {
        return next(new AppError('Password and confirm password must be same', 400, 'Bad Request'));
    }

    // update password
    await authService.updatePassword({
        userId: req.user.id,
        newPassword,
    });

    const response = {
        code: 200,
        status: 'success',
        message: 'Password updated successfully',
        links: {
            self: req.originalUrl,
            login: '/api/v1/auth/login',
        },
    };

    return res.status(200).json(response);
});

module.exports = { updatePassword };
