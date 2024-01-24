const { catchAsync, AppError } = require('../../../../utils');
const authService = require('../../../../lib/auth');
const { Email } = require('../../../../lib/email');
const {
    deletePasswordRecovery,
    findPasswordRecoveryByEmail,
} = require('../../../../lib/password-recovery');

const forgotPassword = catchAsync(async (req, res, next) => {
    const { email } = req.body || {};

    const isAlreadyRequested = await findPasswordRecoveryByEmail({ email });

    // delete existing password recovery record
    if (isAlreadyRequested) await isAlreadyRequested.deleteOne();

    // create new password recovery record
    const passwordRecovery = await authService.forgotPassword({ email });

    console.log('passwordRecovery', passwordRecovery);

    const resetUrl = encodeURI(`${req?.headers?.origin}/reset-password`);

    const user = {
        firstName: passwordRecovery.firstName,
        middleName: passwordRecovery.middleName,
        lastName: passwordRecovery.lastName,
        email: passwordRecovery.email,
        token: passwordRecovery.token,
    };
    try {
        await new Email(user, resetUrl).sendPasswordReset();

        const response = {
            code: 200,
            status: 'success',
            message: 'Password reset link sent to email',
            links: {
                self: req.originalUrl,
                reset: '/api/v1/auth/reset-password',
            },
        };

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        await deletePasswordRecovery({ email: passwordRecovery.email });
        return next(
            new AppError(
                'There was an error sending the email. Try again later!',
                500,
                'Internal Server Error'
            )
        );
    }
});

module.exports = { forgotPassword };
