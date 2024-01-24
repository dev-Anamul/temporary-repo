const Province = require('../models/province');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

/**
 * @description get all province
 * @param {Object} query
 * @returns {Promise<Province>}
 */
exports.getAllProvince = async (query) => {
    // eslint-disable-next-line newline-per-chained-call
    const features = new APIFeatures(Province.find(), query).filter().sort().fields().pagination();

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
 * @description get a province by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Province>}
 * @throws {Error} if province not found
 */
exports.getProvince = async (id) => {
    const province = await Province.findById(id);
    if (!province) throw new AppError('No province found with that id', 404);
    return province;
};

/**
 * @description get a province by property
 * @param {Object} property
 * @returns {Promise<Province>}
 * @throws {Error} if province not found
 */
exports.getProvinceByProperty = async (property) => {
    const province = await Province.find(property);
    if (!province) throw new AppError('No province found with that property', 404);
    return province;
};

/**
 * @description create a new province
 * @param {Object} provincePayload
 * @returns {Promise<Province>}
 */
exports.createProvince = async (provincePayload) => {
    const newProvince = new Province(provincePayload);
    await newProvince.save();
    return newProvince;
};

/**
 * @description update a province
 * @param {import('mongoose').ObjectId} id
 * @param {Object} provincePayload
 * @returns {Promise<Province>}
 */
exports.updateProvince = async function (id, provincePayload) {
    const province = await this.getProvince(id);
    Object.assign(province, provincePayload);
    await province.save();
    return province;
};

/**
 * @description delete a province
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Province>}
 * @throws {Error} if province not found
 */
exports.deleteProvince = async function (id) {
    const province = await this.getProvince(id);
    await province.deleteOne();
    return province;
};
