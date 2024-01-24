const UserAccount = require('../models/user-account');
const AppError = require('../utils/AppError');
const userService = require('./user-account');

/**
 * @description signup a new user
 * @param {Object} userPayload
 * @returns {Promise<UserAccount>}
 */
exports.signup = async (userPayload) => {
    const newUser = await userService.createUser(userPayload);
    return newUser;
};

/**
 * @description login a user
 * @param {Object} userPayload
 * @returns {Promise<UserAccount>}
 * @throws {Error} if user not found
 * @throws {Error} if password not match
 */
exports.login = async (userPayload) => {
    const { userName, password } = userPayload;

    const user = await UserAccount.findOne({ userName });

    if (!user) throw new AppError('Invalid username or password', 400);

    const isMatch = await user.comparePassword(password, user.password);

    if (!isMatch) throw new AppError('Invalid username or password', 400);

    return user;
};
