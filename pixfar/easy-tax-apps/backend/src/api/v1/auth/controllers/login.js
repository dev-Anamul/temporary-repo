const { catchAsync } = require('../../../../utils');
const authService = require('../../../../lib/auth');
const { generateToken } = require('../../../../lib/token');

const login = catchAsync(async (req, res) => {
    const { email, password, notificationToken } = req.body || {};

    const user = await authService.login({ email, password, notificationToken });

    const payload = {
        id: user.id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        mobile: user.mobile,
        role: user.role,
    };

    const token = await generateToken({ payload });

    const response = {
        code: 200,
        status: 'success',
        message: 'Login successful',
        data: {
            access_token: token,
            user,
        },

        links: {
            self: req.originalUrl,
            signup: '/api/v1/auth/signup',
        },
    };

    res.status(200).json(response);
});

module.exports = { login };
