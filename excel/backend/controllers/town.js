const townService = require('../services/town');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all town
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Town>}
 */
exports.getAllTown = catchAsync(async (req, res) => {
    const town = await townService.getAllTown(req.query);
    res.status(200).json({
        status: 'success',
        data: town,
    });
});

/**
 * @description get a town by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Town>}
 */
exports.getTown = catchAsync(async (req, res) => {
    const town = await townService.getTown(req.params.id);
    res.status(200).json({
        status: 'success',
        data: town,
    });
});

/**
 * @description get a town by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Town>}
 */
exports.getTownByProperty = catchAsync(async (req, res) => {
    const town = await townService.getTownByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: town,
    });
});

/**
 * @description create a new town
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Town>}
 */

exports.createTown = catchAsync(async (req, res) => {
    const town = await townService.createTown(req.body);
    res.status(201).json({
        status: 'success',
        data: town,
    });
});

/**
 * @description update a town
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Town>}
 */

exports.updateTown = catchAsync(async (req, res) => {
    const town = await townService.updateTown(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: town,
    });
});

/**
 * @description delete a town
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Town>}
 */

exports.deleteTown = catchAsync(async (req, res) => {
    const town = await townService.deleteTown(req.params.id);
    res.status(204).json({
        status: 'success',
        data: town,
    });
});
