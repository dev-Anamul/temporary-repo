const loginHistoryService = require('../services/login-history');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all login-history
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<LoginHistory>}
 */
exports.getAllLoginHistory = catchAsync(async (req, res) => {
    const loginHistory = await loginHistoryService.getAllLoginHistory(req.query);
    res.status(200).json({
        status: 'success',
        data: loginHistory,
    });
});

/**
 * @description get a login-history by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<LoginHistory>}
 */
exports.getLoginHistory = catchAsync(async (req, res) => {
    const loginHistory = await loginHistoryService.getLoginHistory(req.params.id);
    res.status(200).json({
        status: 'success',
        data: loginHistory,
    });
});

/**
 * @description get a login-history by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<LoginHistory>}
 */
exports.getLoginHistoryByProperty = catchAsync(async (req, res) => {
    const loginHistory = await loginHistoryService.getLoginHistoryByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: loginHistory,
    });
});

/**
 * @description create a new login-history
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<LoginHistory>}
 */

exports.createLoginHistory = catchAsync(async (req, res) => {
    const loginHistory = await loginHistoryService.createLoginHistory(req.body);
    res.status(201).json({
        status: 'success',
        data: loginHistory,
    });
});

/**
 * @description update a login-history
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<LoginHistory>}
 */

exports.updateLoginHistory = catchAsync(async (req, res) => {
    const loginHistory = await loginHistoryService.updateLoginHistory(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: loginHistory,
    });
});

/**
 * @description delete a login-history
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<LoginHistory>}
 */

exports.deleteLoginHistory = catchAsync(async (req, res) => {
    await loginHistoryService.deleteLoginHistory(req.params.id);
    res.status(200).json({
        status: 'success',
        data: null,
    });
});
