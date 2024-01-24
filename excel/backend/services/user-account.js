const UserAccount = require('../models/user-account');
const APIFeatures = require('../utils/APIFeatures');
const AppError = require('../utils/AppError');

/**
 * @description Get All the userAcUserAccounts
 * @returns {Promise<UserAcUserAccount>}
 */
exports.getAllUserAcUserAccounts = (query) => {
    const features = new APIFeatures(UserAccount.find(), query)
        .filter()
        .sort()
        .fields()
        .pagination();

    if (query.search) {
        features.query = features.query.find({
            $or: [
                { userName: { $regex: query.search, $options: 'i' } },
                { firstName: { $regex: query.search, $options: 'i' } },
                { surname: { $regex: query.search, $options: 'i' } },
                { cellphone: { $regex: query.search, $options: 'i' } },
            ],
        });
    }

    return features.query;
};

/**
 * @description Get a userAcUserAccount by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<UserAcUserAccount>}
 * @throws {Error} if userAcUserAccount not found
 *
 */

exports.getUserAcUserAccountById = async (id) => {
    const userAcUserAccount = await UserAccount.findById(id);
    if (!userAcUserAccount) throw new AppError('No userAcUserAccount found with that id', 404);
    return userAcUserAccount;
};

/**
 * @description Get a userAcUserAccount by property
 * @param {Object} property
 * @returns {Promise<UserAcUserAccount>}
 * @throws {Error} if userAcUserAccount not found
 * @example
 */

exports.getUserAcUserAccountByProperty = async (property) => {
    const userAcUserAccounts = await UserAccount.find(property);
    if (!userAcUserAccounts) {
        throw new AppError('No userAcUserAccount found with that property', 404);
    }
    return userAcUserAccounts;
};

/**
 * @description Get a single userAcUserAccount by property
 * @param {Object} property
 * @returns {Promise<UserAcUserAccount>}
 * @throws {Error} if userAcUserAccount not found
 */
exports.getSingleUserAcUserAccountByProperty = async (property) => {
    const userAcUserAccount = await UserAccount.findOne(property);
    if (!userAcUserAccount) {
        throw new AppError('No userAcUserAccount found with that property', 404);
    }
    return userAcUserAccount;
};

/**
 * @description Create a new userAcUserAccount
 * @param {Object} userAcUserAccount
 * @returns {Promise<UserAcUserAccount>}
 * @throws {Error} if userAcUserAccount not found
 */
exports.createUserAcUserAccount = async (userAcUserAccount) => {
    const newUserAcUserAccount = await UserAccount.create(userAcUserAccount);
    return newUserAcUserAccount;
};

/**
 * @description Update a userAcUserAccount
 * @param {import('mongoose').ObjectId} id
 * @param {Object} userAcUserAccountPayload
 * @returns {Promise<UserAcUserAccount>}
 * @throws {Error} if userAcUserAccount not found
 */
exports.updateUserAcUserAccount = async (id, userAcUserAccountPayload) => {
    const userAcUserAccount = await this.getUserAcUserAccountById(id);

    if (!userAcUserAccount) throw new AppError('No userAcUserAccount found with that id', 404);

    Object.assign(userAcUserAccount, userAcUserAccountPayload);
    await userAcUserAccount.save();
    return userAcUserAccount;
};

/**
 * @description Delete a userAcUserAccount
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<UserAcUserAccount>}
 * @throws {Error} if userAcUserAccount not found
 */
exports.deleteUserAcUserAccount = async (id) => {
    const userAcUserAccount = await this.getUserAcUserAccountById(id);
    await userAcUserAccount.deleteOne();
    return userAcUserAccount;
};
