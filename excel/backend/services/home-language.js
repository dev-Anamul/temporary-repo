const HomeLanguage = require('../models/home-language');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all homeLanguage
 * @returns {Promise<HomeLanguage>}
 * @param {Object} query
 */
exports.getAllHomeLanguage = async (query) => {
    const features = new APIFeatures(HomeLanguage.find(), query)
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
 * @description get a homeLanguage by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<HomeLanguage>}
 * @throws {Error} if homeLanguage not found
 */
exports.getHomeLanguage = async (id) => {
    const homeLanguage = await HomeLanguage.findById(id);
    if (!homeLanguage) throw new AppError('No homeLanguage found with that id', 404);
    return homeLanguage;
};

/**
 * @description get a homeLanguage by property
 * @param {Object} property
 * @returns {Promise<HomeLanguage>}
 * @throws {Error} if homeLanguage not found
 */
exports.getHomeLanguageByProperty = async (property) => {
    const homeLanguage = await HomeLanguage.find(property);
    if (!homeLanguage) throw new AppError('No homeLanguage found with that property', 404);
    return homeLanguage;
};

/**
 * @description create a new homeLanguage
 * @param {Object} homeLanguagePayload
 * @returns {Promise<HomeLanguage>}
 */
exports.createHomeLanguage = async (homeLanguagePayload) => {
    const newHomeLanguage = new HomeLanguage(homeLanguagePayload);
    return newHomeLanguage.save();
};

/**
 * @description update a homeLanguage by id
 * @param {import('mongoose').ObjectId} id
 * @param {Object} homeLanguagePayload
 * @returns {Promise<HomeLanguage>}
 * @throws {Error} if homeLanguage not found
 */
exports.updateHomeLanguage = async function (id, homeLanguagePayload) {
    const homeLanguage = await this.getHomeLanguage(id);
    Object.assign(homeLanguage, homeLanguagePayload);
    return homeLanguage.save();
};

/**
 * @description delete a homeLanguage by id
 * @param {import('mongoose').ObjectId} id
 * @returns {never}
 * @throws {Error} if homeLanguage not found
 */
exports.deleteHomeLanguage = async function (id) {
    const homeLanguage = await this.getHomeLanguage(id);
    await homeLanguage.deleteOne();
};
