const { AppError } = require('../../utils');
const { createPasswordRecovery } = require('../password-recovery');
const { getUserByEmail } = require('../user');
const { generateCryptoToken } = require('../../utils/crpto-tocken');

const forgotPassword = async ({ email }) => {
    // check if user is exists
    const user = await getUserByEmail(email);

    if (!user) throw new AppError('No account found with this email', 400, 'Bad Request');

    const token = generateCryptoToken(5);

    const PasswordRecovery = await createPasswordRecovery({ email: user?.email, token });

    return {
        ...PasswordRecovery._doc,
        id: PasswordRecovery._id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
    };
};

module.exports = {
    forgotPassword,
};
