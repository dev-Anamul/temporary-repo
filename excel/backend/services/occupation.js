const Occupation = require('../models/occupation');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all occupation
 * @param {Object} query
 * @returns {Promise<Occupation>}
 */
exports.getAllOccupation = async (query) => {
    const features = new APIFeatures(Occupation.find(), query)
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
 * @description get a occupation by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Occupation>}
 * @throws {Error} if occupation not found
 */
exports.getOccupation = async (id) => {
    const occupation = await Occupation.findById(id);
    if (!occupation) throw new AppError('No occupation found with that id', 404);
    return occupation;
};

/**
 * @description get a occupation by property
 * @param {Object} property
 * @returns {Promise<Occupation>}
 * @throws {Error} if occupation not found
 * @param {Object} property
 */
exports.getOccupationByProperty = async (property) => {
    const occupation = await Occupation.find(property);
    if (!occupation) throw new AppError('No occupation found with that property', 404);
    return occupation;
};

/**
 * @description create a new occupation
 * @param {Object} occupationPayload
 * @returns {Promise<Occupation>}
 */
exports.createOccupation = async (occupationPayload) => {
    const occupation = new Occupation(occupationPayload);
    await occupation.save();
    return occupation;
};

/**
 * @description update a occupation by id
 * @param {import('mongoose').ObjectId} id
 * @param {Object} occupationPayload
 * @returns {Promise<Occupation>}
 */
exports.updateOccupation = async function (id, occupationPayload) {
    const occupation = await this.getOccupation(id);
    Object.assign(occupation, occupationPayload);
    await occupation.save();
    return occupation;
};

/**
 * @description delete a occupation by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Occupation>}
 */
exports.deleteOccupation = async function (id) {
    const occupation = await this.getOccupation(id);
    await occupation.deleteOne();
    return occupation;
};
