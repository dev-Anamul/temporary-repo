const authServices = require('../services/auth');
const catchAsync = require('../utils/catchAsync');
const createTokenSendResponse = require('../utils/createTokenSendResponce');

/**
 * @description signup a new user
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<User>}
 */
exports.signup = catchAsync(async (req, res) => {
    const newUser = await authServices.signup(req.body);
    createTokenSendResponse(newUser, 201, res);
});

/**
 * @description login a user
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<User>}
 */
exports.login = catchAsync(async (req, res) => {
    const user = await authServices.login(req.body);
    createTokenSendResponse(user, 200, res);
});
