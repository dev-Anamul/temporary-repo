const { catchAsync } = require('../../../../utils');
const userService = require('../../../../lib/user');

const createUser = catchAsync(async (req, res) => {
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
        role,
        status,
    } = req.body || {};

    const newUser = await userService.createUser({
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
        role,
        status,
    });

    const response = {
        code: 201,
        status: 'success',
        message: 'Successfully created user',
        data: newUser,
        links: {
            self: req.originalUrl + newUser._id,
            all: req.originalUrl,
        },
    };

    return res.status(201).json(response);
});

module.exports = { createUser };
