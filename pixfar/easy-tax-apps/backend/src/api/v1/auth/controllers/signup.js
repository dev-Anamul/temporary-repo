const authService = require('../../../../lib/auth');
const { generateToken } = require('../../../../lib/token');
const { catchAsync } = require('../../../../utils');

const signup = catchAsync(async (req, res) => {
    // destructure data from the request body
    const {
        firstName,
        middleName,
        lastName,
        mobile,
        dateOfBirth,
        email,
        notificationToken,
        address,
        password,
        termsAndConditions,
    } = req.body || {};

    // create new user
    const newUser = await authService.signup({
        firstName,
        middleName,
        lastName,
        mobile,
        dateOfBirth,
        email,
        notificationToken,
        address,
        password,
        termsAndConditions,
    });

    const payload = {
        id: newUser.id,
        firstName: newUser.firstName,
        middleName: newUser.middleName,
        lastName: newUser.lastName,
        mobile: newUser.mobile,
        role: newUser.role,
    };

    // generate jwt token
    const token = await generateToken({ payload });

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Signup successful',
        data: {
            access_token: token,
            user: newUser,
        },

        links: {
            self: req.originalUrl,
            login: '/api/v1/auth/login',
        },
    };

    // send response
    res.status(200).json(response);
});

module.exports = {
    signup,
};
