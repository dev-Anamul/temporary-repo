const { PasswordRecovery } = require('../../model');
const { timeAfterMinutes, AppError } = require('../../utils');
// create password recover
const createPasswordRecovery = async ({ email, token, expires = timeAfterMinutes({}) }) => {
    const passwordRecovery = new PasswordRecovery({
        email,
        token,
        expires,
    });

    return passwordRecovery.save();
};

// find password recovery record based on email
const findPasswordRecoveryByEmail = async ({ email, token }) => {
    const query = {
        email,
    };

    if (token) {
        query.token = token;
    }

    const passwordRecovery = await PasswordRecovery.findOne(query);

    return passwordRecovery;
};

// delete password recovery record based on email
const deletePasswordRecovery = async ({ email, token }) => {
    const passwordRecovery = await findPasswordRecoveryByEmail({ email, token });

    if (!passwordRecovery) {
        throw new AppError('No recovery record found with this email', 404, 'Not Found');
    }

    await passwordRecovery.deleteOne();
};

// export modules
module.exports = {
    createPasswordRecovery,
    findPasswordRecoveryByEmail,
    deletePasswordRecovery,
};
