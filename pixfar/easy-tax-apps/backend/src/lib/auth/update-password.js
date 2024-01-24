/* eslint-disable object-curly-newline */
const { AppError, generateHash } = require('../../utils');
const { getUserById } = require('../user');

const updatePassword = async ({ userId, newPassword }) => {
    // get the user by id
    const user = await getUserById(userId);

    // if user not found then throw error
    if (!user) throw new AppError('User not found', 404, 'Not Found');

    // hash the password
    const hash = await generateHash(newPassword);

    // update the user password
    user.password = hash;
    user.passwordChangedAt = Date.now();

    // save the user
    return user.save();
};

module.exports = {
    updatePassword,
};
