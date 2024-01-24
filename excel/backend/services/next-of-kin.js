const NextOfKin = require('../models/next-of-kin');
const APIFeatures = require('../utils/APIFeatures');
const AppError = require('../utils/AppError');

/**
 * @description get all next-of-kin
 * @returns {Promise<NextOfKin>}
 * @param {Object} query
 */
exports.getAllNextOfKin = async (query) => {
    // eslint-disable-next-line newline-per-chained-call
    const features = new APIFeatures(NextOfKin.find(), query).filter().sort().fields().pagination();

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
 * @description get a next-of-kin by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<NextOfKin>}
 * @throws {Error} if next-of-kin not found
 */
exports.getNextOfKin = async (id) => {
    const nextOfKin = await NextOfKin.findById(id);
    if (!nextOfKin) throw new AppError('No next-of-kin found with that id', 404);
    return nextOfKin;
};

/**
 * @description get a next-of-kin by property
 * @param {Object} property
 * @returns {Promise<NextOfKin>}
 * @throws {Error} if next-of-kin not found
 */
exports.getNextOfKinByProperty = async (property) => {
    const nextOfKin = await NextOfKin.find(property);
    if (!nextOfKin) throw new AppError('No next-of-kin found with that property', 404);
    return nextOfKin;
};

/**
 * @description create a new next-of-kin
 * @param {Object} nextOfKinPayload
 * @returns {Promise<NextOfKin>}
 */
exports.createNextOfKin = async (nextOfKinPayload) => {
    const newNextOfKin = new NextOfKin(nextOfKinPayload);
    await newNextOfKin.save();
    return newNextOfKin;
};

/**
 * @description update a next-of-kin
 * @param {import('mongoose').ObjectId} id
 * @param {Object} nextOfKinPayload
 * @returns {Promise<NextOfKin>}
 * @throws {Error} if next-of-kin not found
 */
exports.updateNextOfKin = async function (id, nextOfKinPayload) {
    const nextOfKin = this.getNextOfKin(id);
    Object.assign(nextOfKin, nextOfKinPayload);
    await nextOfKin.save();
    return nextOfKin;
};

/**
 * @description delete a next-of-kin
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<NextOfKin>}
 */
exports.deleteNextOfKin = async function (id) {
    const nextOfKin = await this.getNextOfKin(id);
    await nextOfKin.deleteOne();
    return nextOfKin;
};
