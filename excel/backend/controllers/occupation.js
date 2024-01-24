const occupationService = require('../services/occupation');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all occupation
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */
exports.getAllOccupation = catchAsync(async (req, res) => {
    const occupation = await occupationService.getAllOccupation(req.query);
    res.status(200).json({
        status: 'success',
        data: occupation,
    });
});

/**
 * @description get a occupation by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */
exports.getOccupation = catchAsync(async (req, res) => {
    const occupation = await occupationService.getOccupation(req.params.id);
    res.status(200).json({
        status: 'success',
        data: occupation,
    });
});

/**
 * @description get a occupation by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */
exports.getOccupationByProperty = catchAsync(async (req, res) => {
    const occupation = await occupationService.getOccupationByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: occupation,
    });
});

/**
 * @description create a new occupation
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */

exports.createOccupation = catchAsync(async (req, res) => {
    const occupation = await occupationService.createOccupation(req.body);
    res.status(201).json({
        status: 'success',
        data: occupation,
    });
});

/**
 * @description update a occupation
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */

exports.updateOccupation = catchAsync(async (req, res) => {
    const occupation = await occupationService.updateOccupation(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: occupation,
    });
});

/**
 * @description delete a occupation
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */

exports.deleteOccupation = catchAsync(async (req, res) => {
    const occupation = await occupationService.deleteOccupation(req.params.id);
    res.status(200).json({
        status: 'success',
        data: occupation,
    });
});

/**
 * @description delete a occupation
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Occupation>}
 */

exports.deleteOccupationByProperty = catchAsync(async (req, res) => {
    const occupation = await occupationService.deleteOccupationByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: occupation,
    });
});
