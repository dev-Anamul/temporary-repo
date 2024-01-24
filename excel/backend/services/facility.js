const Facility = require('../models/facility');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all facility
 * @returns {Promise<Facility>}
 * @param {Object} query
 */
exports.getAllFacility = async (query) => {
    // eslint-disable-next-line newline-per-chained-call
    const features = new APIFeatures(Facility.find(), query).filter().sort().fields().pagination();

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
 * @description get a facility by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Facility>}
 * @throws {Error} if facility not found
 */
exports.getFacility = async (id) => {
    const facility = await Facility.findById(id);
    if (!facility) throw new AppError('No facility found with that id', 404);
    return facility;
};

/**
 * @description get a facility by property
 * @param {Object} property
 * @returns {Promise<Facility>}
 * @throws {Error} if facility not found
 */
exports.getFacilityByProperty = async (property) => {
    const facility = await Facility.find(property);
    if (!facility) throw new AppError('No facility found with that property', 404);
    return facility;
};

/**
 * @description create a new facility
 * @param {Object} facilityPayload
 * @returns {Promise<Facility>}
 */
exports.createFacility = async (facilityPayload) => {
    const newFacility = new Facility(facilityPayload);
    await newFacility.save();
    return newFacility;
};

/**
 * @description update a facility
 * @param {import('mongoose').ObjectId} id
 * @param {Object} facilityPayload
 * @returns {Promise<Facility>}
 * @throws {Error} if facility not found
 */
exports.updateFacility = async function (id, facilityPayload) {
    const facility = await this.getFacility(id);
    Object.assign(facility, facilityPayload);
    await facility.save();
    return facility;
};

/**
 * @description delete a facility
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Facility>}
 * @throws {Error} if facility not found
 */
exports.deleteFacility = async function (id) {
    const facility = await this.getFacility(id);
    await facility.deleteOne();
    return facility;
};
