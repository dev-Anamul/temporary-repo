const { updateUserById } = require('../../../../lib/user');
const { catchAsync } = require('../../../../utils');

const updateProfile = catchAsync(async (req, res) => {
    const userId = req.user._id;

    const {
        firstName,
        middleName,
        lastName,
        mobile,
        dateOfBirth,
        email,
        notificationToken,
        notificationType,
        address,
        employmentWorkType,
        irdNumber,
    } = req.body || {};

    const user = await updateUserById({
        id: userId,
        firstName,
        middleName,
        lastName,
        mobile,
        dateOfBirth,
        email,
        notificationToken,
        notificationType,
        address,
        employmentWorkType,
        irdNumber,
        avatar: req.file?.filename ? `${process.env.APP_URL}/users/${req.file.filename}` : null,
    });

    const response = {
        code: 200,
        status: 'success',
        message: 'Profile updated successfully',
        data: {
            user,
        },

        links: {
            self: req.originalUrl,
        },
    };

    res.status(200).json(response);
});

module.exports = { updateProfile };
