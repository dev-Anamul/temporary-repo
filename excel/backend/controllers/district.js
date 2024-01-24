const districtService = require('../services/district');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all district
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<District>}
 */
exports.getAllDistrict = catchAsync(async (req, res) => {
    const district = await districtService.getAllDistrict(req.query);
    res.status(200).json({
        status: 'success',
        data: {
            district,
        },
    });
});

/**
 * @description get a district by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<District>}
 */
exports.getDistrict = catchAsync(async (req, res) => {
    const district = await districtService.getDistrictById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            district,
        },
    });
});

/**
 * @description get a district by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<District>}
 */
exports.getDistrictByProperty = catchAsync(async (req, res) => {
    const district = await districtService.getDistrictByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            district,
        },
    });
});

/**
 * @description create a new district
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<District>}
 */
exports.createDistrict = catchAsync(async (req, res) => {
    const district = await districtService.createDistrict(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            district,
        },
    });
});

/**
 * @description update a district
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<District>}
 */
exports.updateDistrict = catchAsync(async (req, res) => {
    const district = await districtService.updateDistrict(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: {
            district,
        },
    });
});

/**
 * @description delete a district
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<District>}
 */
exports.deleteDistrict = catchAsync(async (req, res) => {
    await districtService.deleteDistrict(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
