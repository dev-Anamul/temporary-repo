const FacilityAccess = require('../models/facility-access');
const AppError = require('../utils/AppError');

/**
 * @description get all facilityAccess
 * @returns {Promise<FacilityAccess>}
 */
exports.getAllFacilityAccess = () => FacilityAccess.find();

/**
 * @description get a facilityAccess by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.getFacilityAccessById = async (id) => {
    const facilityAccess = await FacilityAccess.findById(id);
    if (!facilityAccess) throw new AppError('No facilityAccess found with that id', 404);
    return facilityAccess;
};

/**
 * @description get a facilityAccess by property
 * @param {Object} property
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.getFacilityAccessByProperty = async (property) => {
    const facilityAccess = await FacilityAccess.find(property);
    if (!facilityAccess) {
        throw new AppError('No facilityAccess found with that property', 404);
    }
    return facilityAccess;
};

/**
 * @description get a single facilityAccess by property
 * @param {Object} property
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.getSingleFacilityAccessByProperty = async (property) => {
    const facilityAccess = await FacilityAccess.findOne(property);
    if (!facilityAccess) {
        throw new AppError('No facilityAccess found with that property', 404);
    }
    return facilityAccess;
};

/**
 * @description create a new facilityAccess
 * @param {Object} facilityAccess
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.createFacilityAccess = async (facilityAccess) => {
    const newFacilityAccess = new FacilityAccess(facilityAccess);
    await newFacilityAccess.save();
    return newFacilityAccess;
};

/**
 * @description update a facilityAccess
 * @param {Object} facilityAccess
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.updateFacilityAccess = async (id, facilityAccessPayload) => {
    const facilityAccess = await this.getFacilityAccessById(id);
    Object.assign(facilityAccess, facilityAccessPayload);
    await facilityAccess.save();
    return facilityAccess;
};

/**
 * @description delete a facilityAccess
 * @param {Object} facilityAccess
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.deleteFacilityAccess = async (id) => {
    const facilityAccess = await this.getFacilityAccessById(id);
    await facilityAccess.deleteOne();
    return facilityAccess;
};

/**
 * @description approve a facilityAccess
 * @param {Object} facilityAccess
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.approveFacilityAccess = async (payload) => {
    const { facilityAccessId, approvedBy, isApproved } = payload || {};
    const facilityAccess = await this.getFacilityAccessById(facilityAccessId);
    facilityAccess.approvedBy = approvedBy;
    facilityAccess.isApproved = isApproved;
    await facilityAccess.save();
    return facilityAccess;
};
