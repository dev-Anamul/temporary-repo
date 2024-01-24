const recoveryRequestService = require('../services/recovery-request');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all recoveryRequest
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<RecoveryRequest>}
 */
exports.getAllRecoveryRequest = catchAsync(async (req, res) => {
    const recoveryRequest = await recoveryRequestService.getAllRecoveryRequest(req.query);
    res.status(200).json({
        status: 'success',
        data: recoveryRequest,
    });
});

/**
 * @description get a recoveryRequest by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<RecoveryRequest>}
 */

exports.getRecoveryRequest = catchAsync(async (req, res) => {
    const recoveryRequest = await recoveryRequestService.getRecoveryRequest(req.params.id);
    res.status(200).json({
        status: 'success',
        data: recoveryRequest,
    });
});

/**
 * @description get a recoveryRequest by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<RecoveryRequest>}
 */

exports.getRecoveryRequestByProperty = catchAsync(async (req, res) => {
    const recoveryRequest = await recoveryRequestService.getRecoveryRequestByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: recoveryRequest,
    });
});

/**
 * @description create a new recoveryRequest
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<RecoveryRequest>}
 */

exports.createRecoveryRequest = catchAsync(async (req, res) => {
    const recoveryRequest = await recoveryRequestService.createRecoveryRequest(req.body);
    res.status(201).json({
        status: 'success',
        data: recoveryRequest,
    });
});

/**
 * @description update a recoveryRequest
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<RecoveryRequest>}
 */

exports.updateRecoveryRequest = catchAsync(async (req, res) => {
    const recoveryRequest = await recoveryRequestService.updateRecoveryRequest(
        req.params.id,
        req.body
    );
    res.status(200).json({
        status: 'success',
        data: recoveryRequest,
    });
});

/**
 * @description delete a recoveryRequest
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<RecoveryRequest>}
 */

exports.deleteRecoveryRequest = catchAsync(async (req, res) => {
    const recoveryRequest = await recoveryRequestService.deleteRecoveryRequest(req.params.id);
    res.status(200).json({
        status: 'success',
        data: recoveryRequest,
    });
});
