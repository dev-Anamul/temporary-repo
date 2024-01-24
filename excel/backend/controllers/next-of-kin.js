const nextOfKinService = require('../services/next-of-kin');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all next of kin
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<NextOfKin>}
 */
exports.getAllNextOfKin = catchAsync(async (req, res) => {
    const nextOfKin = await nextOfKinService.getAllNextOfKin(req.query);
    res.status(200).json({
        status: 'success',
        data: {
            nextOfKin,
        },
    });
});

/**
 * @description get a next of kin by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<NextOfKin>}
 */
exports.getNextOfKin = catchAsync(async (req, res) => {
    const nextOfKin = await nextOfKinService.getNextOfKinById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            nextOfKin,
        },
    });
});

/**
 * @description get a next of kin by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<NextOfKin>}
 */
exports.getNextOfKinByProperty = catchAsync(async (req, res) => {
    const nextOfKin = await nextOfKinService.getNextOfKinByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            nextOfKin,
        },
    });
});

/**
 * @description create a new next of kin
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<NextOfKin>}
 */
exports.createNextOfKin = catchAsync(async (req, res) => {
    const nextOfKin = await nextOfKinService.createNextOfKin(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            nextOfKin,
        },
    });
});

/**
 * @description update next of kin by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<NextOfKin>}
 */
exports.updateNextOfKin = catchAsync(async (req, res) => {
    const nextOfKin = await nextOfKinService.updateNextOfKinById(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: {
            nextOfKin,
        },
    });
});

/**
 * @description delete next of kin by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<NextOfKin>}
 */
exports.deleteNextOfKin = catchAsync(async (req, res) => {
    await nextOfKinService.deleteNextOfKinById(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
