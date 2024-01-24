const Town = require('../models/town');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all town
 * @param {Object} query
 * @returns {Promise<Town>}
 */
exports.getAllTown = async (query) => {
    // eslint-disable-next-line newline-per-chained-call
    const features = new APIFeatures(Town.find(), query).filter().sort().fields().pagination();

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
 * @description get a town by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Town>}
 * @throws {Error} if town not found
 */
exports.getTown = async (id) => {
    const town = await Town.findById(id);
    if (!town) throw new AppError('No town found with that id', 404);
    return town;
};

/**
 * @description get a town by property
 * @param {Object} property
 * @returns {Promise<Town>}
 * @throws {Error} if town not found
 */
exports.getTownByProperty = async (property) => {
    const town = await Town.find(property);
    if (!town) throw new AppError('No town found with that property', 404);
    return town;
};

/**
 * @description create a new town
 * @param {Object} townPayload
 * @returns {Promise<Town>}
 */
exports.createTown = async (townPayload) => {
    const town = new Town(townPayload);
    await town.save();
    return town;
};

/**
 * @description update a town by id
 * @param {import('mongoose').ObjectId} id
 * @param {Object} townPayload
 * @returns {Promise<Town>}
 */
exports.updateTown = async function (id, townPayload) {
    const town = await this.getTown(id);
    Object.assign(town, townPayload);
    await town.save();
    return town;
};

/**
 * @description delete a town by id
 * @param {import('mongoose').ObjectId} id
 * @returns {never}
 */
exports.deleteTown = async function (id) {
    const town = await this.getTown(id);
    await town.deleteOne();
};
