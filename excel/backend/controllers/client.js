const clientService = require('../services/client');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all client
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Client>}
 */
exports.getAllClient = catchAsync(async (req, res) => {
    const client = await clientService.getAllClient(req.query);
    res.status(200).json({
        status: 'success',
        data: client,
    });
});

/**
 * @description get a client by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Client>}
 */
exports.getClient = catchAsync(async (req, res) => {
    const client = await clientService.getClient(req.params.id);
    res.status(200).json({
        status: 'success',
        data: client,
    });
});

/**
 * @description get a client by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Client>}
 */
exports.getClientByProperty = catchAsync(async (req, res) => {
    const client = await clientService.getClientByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: client,
    });
});

/**
 * @description create a new client
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Client>}
 */

exports.createClient = catchAsync(async (req, res) => {
    const client = await clientService.createClient(req.body);
    res.status(201).json({
        status: 'success',
        data: client,
    });
});

/**
 * @description update a client by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Client>}
 */
exports.updateClient = catchAsync(async (req, res) => {
    const client = await clientService.updateClient(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: client,
    });
});

/**
 * @description delete a client by id
 * @param {Object} req
 * @param {Object} res
 * @returns {never}
 */
exports.deleteClient = catchAsync(async (req, res) => {
    await clientService.deleteClient(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
