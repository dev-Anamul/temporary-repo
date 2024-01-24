const proviceService = require('../services/province');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all province
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Province>}
 */
exports.getAllProvince = catchAsync(async (req, res) => {
    const province = await proviceService.getAllProvince(req.query);
    res.status(200).json({
        status: 'success',
        data: province,
    });
});

/**
 * @description get a province by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Province>}
 */
exports.getProvince = catchAsync(async (req, res) => {
    const province = await proviceService.getProvince(req.params.id);
    res.status(200).json({
        status: 'success',
        data: province,
    });
});

/**
 * @description get a province by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Province>}
 */

exports.getProvinceByProperty = catchAsync(async (req, res) => {
    const province = await proviceService.getProvinceByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: province,
    });
});

/**
 * @description create a new province
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Province>}
 */

exports.createProvince = catchAsync(async (req, res) => {
    const province = await proviceService.createProvince(req.body);
    res.status(201).json({
        status: 'success',
        data: province,
    });
});

/**
 * @description update a province
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Province>}
 */

exports.updateProvince = catchAsync(async (req, res) => {
    const province = await proviceService.updateProvince(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: province,
    });
});

/**
 * @description delete a province
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Province>}
 */

exports.deleteProvince = catchAsync(async (req, res) => {
    const province = await proviceService.deleteProvince(req.params.id);
    res.status(200).json({
        status: 'success',
        data: province,
    });
});
