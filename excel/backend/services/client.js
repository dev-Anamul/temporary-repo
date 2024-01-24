const Client = require('../models/client');
const APIFeatures = require('../utils/APIFeatures');
const AppError = require('../utils/AppError');

/**
 * @description get all clients
 * @returns {Promise<Client>}
 */
exports.getAllClients = (query) => {
    // eslint-disable-next-line newline-per-chained-call
    const features = new APIFeatures(Client.find(), query).filter().sort().fields().pagination();

    if (query.search) {
        features.query = features.query.find({
            $or: [
                { name: { $regex: query.search, $options: 'i' } },
                { surname: { $regex: query.search, $options: 'i' } },
                { cellphone: { $regex: query.search, $options: 'i' } },
            ],
        });
    }

    return features.query;
};

/**
 * @description get a client by id
 * @param {import('mongoose').ObjectId} id
 * @returns {Promise<Client>}
 * @throws {Error} if client not found
 */
exports.getClient = async (id) => {
    const client = await Client.findById(id);
    if (!client) throw new AppError('No client found with that id', 404);
    return client;
};

/**
 * @description get a client by property
 * @param {Object} property
 * @returns {Promise<Client>}
 * @throws {Error} if client not found
 */
exports.getClientByProperty = async (property) => {
    const client = await Client.find(property);
    if (!client) throw new AppError('No client found with that property', 404);
    return client;
};

/**
 * @description create a new client
 * @param {Object} clientPayload
 * @returns {Promise<Client>}
 * @throws {Error} if client not found
 */
exports.createClient = async (clientPayload) => {
    const newClient = new Client(clientPayload);
    await newClient.save();
    return newClient;
};

/**
 * @description update a client
 * @param {import('mongoose').ObjectId} id
 * @param {Object} clientPayload
 * @returns {Promise<Client>}
 * @throws {Error} if client not found
 */
exports.updateClient = async function (id, clientPayload) {
    const client = this.getClient(id);
    Object.assign(client, clientPayload);
    await client.save();
    return client;
};

/**
 * @description delete a client
 * @param {import('mongoose').ObjectId} id
 * @returns {never}
 * @throws {Error} if client not found
 */
exports.deleteClient = async function (id) {
    const client = await this.getClient(id);
    await client.deleteOne();
};
