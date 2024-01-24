const District = require('../models/district');
const APIFeatures = require('../utils/APIFeatures');
const AppError = require('../utils/AppError');

/**
 * @description get all district
 * @returns {Promise<District>}
 * @throws {Error} if district not found
 * @param {Object} query
 */
exports.getAllDistrict = (query) => {
    // eslint-disable-next-line newline-per-chained-call
    const features = new APIFeatures(District.find(), query).filter().sort().fields().pagination();

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
 * @description get a district by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<District>}
 * @throws {Error} if district not found
 */
exports.getDistrict = async (id) => {
    const district = await District.findById(id);
    if (!district) throw new AppError('No district found with that id', 404);
    return district;
};

/**
 * @description get a district by property
 * @param {Object} property
 * @returns {Promise<District>}
 * @throws {Error} if district not found
 */
exports.getDistrictByProperty = async (property) => {
    const district = await District.find(property);
    if (!district) throw new AppError('No district found with that property', 404);
    return district;
};

/**
 * @description create a new district
 * @param {Object} districtPayload
 * @returns {Promise<District>}
 */
exports.createDistrict = async (districtPayload) => {
    const newDistrict = new District(districtPayload);
    await newDistrict.save();
    return newDistrict;
};

/**
 * @description update a district
 * @param {import('mongoose').ObjectId} id
 * @param {Object} districtPayload
 * @returns {Promise<District>}
 */
exports.updateDistrict = async function (id, districtPayload) {
    const district = await this.getDistrict(id);
    Object.assign(district, districtPayload);
    await district.save();
    return district;
};

/**
 * @description delete a district
 * @param {import('mongoose').ObjectId} id
 * @returns {never}
 */
exports.deleteDistrict = async function (id) {
    const district = await this.getDistrict(id);
    await district.deleteOne();
};
