const { updateUserById } = require('../../../../lib/user');
const { catchAsync } = require('../../../../utils');
const userService = require('../../../../lib/user');
const { Email } = require('../../../../lib/email');

const updateUser = catchAsync(async (req, res) => {
    const { id } = req.params || {};
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
        role,
        status,
    } = req.body || {};

    const foundUser = await userService.getUserById(id);

    const user = await updateUserById({
        id,
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
        role,
        status,
    });

    let isSendMail = false;
    if (foundUser?.status === 'pending' && status !== 'pending') {
        isSendMail = true;
    }

    if (isSendMail) {
        try {
            await new Email(user, '').sendAccountStatus();

            console.log('Email sent successfully');
        } catch (error) {
            console.log(error);
        }
    }

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'User updated successfully',
        data: user,
        links: {
            self: req.originalUrl,
        },
    };

    return res.status(200).json(response);
});

module.exports = { updateUser };
