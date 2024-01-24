/* eslint-disable object-curly-newline */
const { catchAsync, AppError } = require('../../../../utils');
const supportMessageService = require('../../../../lib/support-message');
const { Email } = require('../../../../lib/email');
const userService = require('../../../../lib/user');

const replyMessage = catchAsync(async (req, res, next) => {
    const { id } = req.params || {};
    const { userId, subject, message, email } = req.body;

    const userMail = await userService.getUserById(userId);

    const reply = await supportMessageService.createSupportMessage({
        email,
        message,
        subject,
        userId,
        replyId: id,
        type: 'send',
    });
    const user = {
        firstName: userMail.firstName,
        middleName: userMail.middleName,
        lastName: userMail.lastName,
        email,
        subject,
        message,
    };
    try {
        await new Email(user).sendSupport();

        const response = {
            code: 200,
            status: 'success',
            message: 'Reply sent successfully',
            data: reply,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        await supportMessageService.deleteSupportMessage(reply._id);
        return next(
            new AppError(
                'There was an error sending the email. Try again later!',
                500,
                'Internal Server Error'
            )
        );
    }
});

// export the module
module.exports = {
    replyMessage,
};
