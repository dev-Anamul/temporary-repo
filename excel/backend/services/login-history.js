const LoginHistory = require('../models/login-history');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all loginHistory
 * @returns {Promise<LoginHistory>}
 * @throws {Error} if loginHistory not found
 * @param {Object} query
 */
exports.getAllLoginHistory = async (query) => {
    const features = new APIFeatures(LoginHistory.find(), query)
        .filter()
        .sort()
        .fields()
        .pagination();

    if (query.search) {
        features.query = features.query.find({
            $or: [
                { name: { $regex: query.search, $options: 'i' } },
                { surname: { $regex: query.search, $options: 'i' } },
                { cellphone: { $regex: query.search, $options: 'i' } },
            ],
        });
    }

    return features.query;
};

/**
 * @description get a loginHistory by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<LoginHistory>}
 * @throws {Error} if loginHistory not found
 */
exports.getLoginHistory = async (id) => {
    const loginHistory = await LoginHistory.findById(id);
    if (!loginHistory) throw new AppError('No loginHistory found with that id', 404);
    return loginHistory;
};

/**
 * @description get a loginHistory by property
 * @param {Object} property
 * @returns {Promise<LoginHistory>}
 * @throws {Error} if loginHistory not found
 * @param {Object} property
 */
exports.getLoginHistoryByProperty = async (property) => {
    const loginHistory = await LoginHistory.find(property);
    if (!loginHistory) throw new AppError('No loginHistory found with that property', 404);
    return loginHistory;
};

/**
 * @description create a new loginHistory
 * @param {Object} loginHistoryPayload
 * @returns {Promise<LoginHistory>}
 * @param {Object} loginHistoryPayload
 */
exports.createLoginHistory = async (loginHistoryPayload) => {
    const newLoginHistory = new LoginHistory(loginHistoryPayload);
    return newLoginHistory.save();
};

/**
 * @description update a loginHistory
 * @param {import('mongoose').ObjectId} id
 * @param {Object} loginHistoryPayload
 * @returns {Promise<LoginHistory>}
 * @throws {Error} if loginHistory not found
 */
exports.updateLoginHistory = async function (id, loginHistoryPayload) {
    const loginHistory = this.getLoginHistory(id);
    Object.assign(loginHistory, loginHistoryPayload);
    return loginHistory.save();
};

/**
 * @description delete a loginHistory
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<LoginHistory>}
 * @throws {Error} if loginHistory not found
 */
exports.deleteLoginHistory = async function (id) {
    const loginHistory = await this.getLoginHistory(id);
    return loginHistory.deleteOne();
};
