const EducationLevel = require('../models/education-level');
const APIFeatures = require('../utils/APIFeatures');
const AppError = require('../utils/AppError');

/**
 * @description get all educationLevel
 * @returns {Promise<EducationLevel>}
 * @param {Object} query
 */
exports.getAllEducationLevel = (query) => {
    const features = new APIFeatures(EducationLevel.find(), query)
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
 * @description get a educationLevel by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<EducationLevel>}
 * @throws {Error} if educationLevel not found
 */
exports.getEducationLevel = async (id) => {
    const educationLevel = await EducationLevel.findById(id);
    if (!educationLevel) throw new AppError('No educationLevel found with that id', 404);
    return educationLevel;
};

/**
 * @description get a educationLevel by property
 * @param {Object} property
 * @returns {Promise<EducationLevel>}
 * @throws {Error} if educationLevel not found
 */
exports.getEducationLevelByProperty = async (property) => {
    const educationLevel = await EducationLevel.find(property);
    if (!educationLevel) throw new AppError('No educationLevel found with that property', 404);
    return educationLevel;
};

/**
 * @description create a new educationLevel
 * @param {Object} educationLevelPayload
 * @returns {Promise<EducationLevel>}
 */
exports.createEducationLevel = async (educationLevelPayload) => {
    const newEducationLevel = new EducationLevel(educationLevelPayload);
    await newEducationLevel.save();
    return newEducationLevel;
};

/**
 * @description update a educationLevel
 * @param {import('mongoose').ObjectId} id
 * @param {Object} educationLevelPayload
 * @returns {Promise<EducationLevel>}
 * @throws {Error} if educationLevel not found
 */
exports.updateEducationLevel = async function (id, educationLevelPayload) {
    const educationLevel = this.getEducationLevel(id);
    Object.assign(educationLevel, educationLevelPayload);
    await educationLevel.save();
    return educationLevel;
};

/**
 * @description delete a educationLevel
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<EducationLevel>}
 */
exports.deleteEducationLevel = async function (id) {
    const educationLevel = await this.getEducationLevel(id);
    await educationLevel.deleteOne();
    return educationLevel;
};
