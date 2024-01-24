const RecoveryRequest = require('../models/recovery-request');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all recoveryRequest
 * @param {Object} query
 * @returns {Promise<RecoveryRequest>}
 */
exports.getAllRecoveryRequest = async (query) => {
    const features = new APIFeatures(RecoveryRequest.find(), query)
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
 * @description get a recoveryRequest by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<RecoveryRequest>}
 * @throws {Error} if recoveryRequest not found
 */
exports.getRecoveryRequest = async (id) => {
    const recoveryRequest = await RecoveryRequest.findById(id);
    if (!recoveryRequest) throw new AppError('No recoveryRequest found with that id', 404);
    return recoveryRequest;
};

/**
 * @description get a recoveryRequest by property
 * @param {Object} property
 * @returns {Promise<RecoveryRequest>}
 * @throws {Error} if recoveryRequest not found
 */
exports.getRecoveryRequestByProperty = async (property) => {
    const recoveryRequest = await RecoveryRequest.find(property);
    if (!recoveryRequest) throw new AppError('No recoveryRequest found with that property', 404);
    return recoveryRequest;
};

/**
 * @description create a new recoveryRequest
 * @param {Object} recoveryRequestPayload
 * @returns {Promise<RecoveryRequest>}
 */
exports.createRecoveryRequest = async (recoveryRequestPayload) => {
    const recoveryRequest = new RecoveryRequest(recoveryRequestPayload);
    await recoveryRequest.save();
    return recoveryRequest;
};

/**
 * @description update a recoveryRequest by id
 * @param {import('mongoose').ObjectId} id
 * @param {Object} recoveryRequestPayload
 * @returns {Promise<RecoveryRequest>}
 */
exports.updateRecoveryRequest = async function (id, recoveryRequestPayload) {
    const recoveryRequest = await this.getRecoveryRequest(id);
    Object.assign(recoveryRequest, recoveryRequestPayload);
    await recoveryRequest.save();
    return recoveryRequest;
};

/**
 * @description delete a recoveryRequest by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<RecoveryRequest>}
 */
exports.deleteRecoveryRequest = async function (id) {
    const recoveryRequest = await this.getRecoveryRequest(id);
    await recoveryRequest.deleteOne();
};
