/* eslint-disable object-curly-newline */
const { AppError, generateHash } = require('../../utils');
const { findPasswordRecoveryByEmail, deletePasswordRecovery } = require('../password-recovery');
const { updateUserPassword } = require('../user');

const resetPassword = async ({ token, newPassword, confirmPassword, email }) => {
    // check if token is exists
    if (!token) throw new AppError('Invalid token', 400, 'Bad Request');

    // check if password recovery record exists
    const passwordRecovery = await findPasswordRecoveryByEmail({ email, token });

    if (!passwordRecovery) {
        throw new AppError('No recovery record found with this email', 404, 'Not Found');
    }

    // check if token is valid
    if (passwordRecovery.token !== token) {
        throw new AppError('Invalid token', 400, 'Bad Request');
    }

    // check if token is expired or not
    if (passwordRecovery.expires < new Date()) {
        // if token is expired then delete the password recovery record
        await deletePasswordRecovery({ email });

        // throw error
        throw new AppError('Token expired', 400, 'Bad Request');
    }

    // check if new password and confirm password matches
    if (newPassword !== confirmPassword) {
        throw new AppError('Passwords do not match', 400, 'Bad Request');
    }

    // hash the password
    const hashedPassword = await generateHash(newPassword);

    // update the user password
    const user = await updateUserPassword(email, hashedPassword);

    // delete the password recovery record
    await deletePasswordRecovery({ email });

    // verify the token
    return user;
};

module.exports = {
    resetPassword,
};
