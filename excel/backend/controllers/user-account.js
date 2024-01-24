const userServices = require('../services/user-account');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all users
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<User>}
 */
exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await userServices.getAllUsers();
    res.status(200).json({
        status: 'success',
        data: {
            users,
        },
    });
});

/**
 * @description get a user by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<User>}
 * @throws {Error} if user not found
 */
exports.getUserById = catchAsync(async (req, res) => {
    const user = await userServices.getUserById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            user,
        },
    });
});

/**
 * @description get a user by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<User>}
 * @throws {Error} if user not found
 */
exports.getUserByProperty = catchAsync(async (req, res) => {
    const users = await userServices.getUserByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            users,
        },
    });
});

/**
 * @description get a single user by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<User>}
 * @throws {Error} if user not found
 */
exports.getSingleUserByProperty = catchAsync(async (req, res) => {
    const user = await userServices.getSingleUserByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            user,
        },
    });
});

/**
 * @description create a new user
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<User>}
 * @throws {Error} if user not found
 */
exports.createUser = catchAsync(async (req, res) => {
    const newUser = await userServices.createUser(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newUser,
        },
    });
});

/**
 * @description update a user by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<User>}
 * @throws {Error} if user not found
 */
exports.updateUserById = catchAsync(async (req, res) => {
    const user = await userServices.updateUserById(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: {
            user,
        },
    });
});

/**
 * @description delete a user by id
 * @param {Object} req
 * @param {Object} res
 * @returns {never}
 * @throws {Error} if user not found
 */
exports.deleteUserById = catchAsync(async (req, res) => {
    await userServices.deleteUserById(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
