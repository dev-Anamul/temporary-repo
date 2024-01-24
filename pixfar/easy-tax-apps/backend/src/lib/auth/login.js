const { compareHash } = require('../../utils');
const { AppError } = require('../../utils');
const { getUserByEmail, updateUserNotificationToken } = require('../user');

const login = async ({ email, password, notificationToken }) => {
    // get user by email
    const user = await getUserByEmail(email);

    // if user does not exist, throw error
    if (!user) throw new AppError('Invalid email or password', 400, 'Bad Request');

    // if user notification token is not the same as the one sent from the client, update it
    if (notificationToken) {
        await updateUserNotificationToken(email, notificationToken);
    }

    // compare password
    const isPasswordValid = await compareHash(password, user.password);

    // if password is not valid, throw error
    if (!isPasswordValid) throw new AppError('Invalid email or password', 400, 'Bad Request');

    // return user
    return { ...user._doc, id: user._id, password: undefined };
};

module.exports = {
    login,
};
