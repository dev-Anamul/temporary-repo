const getCategory = require('./get-category');
const createCategory = require('./create');
const findAll = require('./find-all');
const update = require('./update');
const remove = require('./remove');
const bulkIdCheck = require('./check-id');

module.exports = {
    ...getCategory,
    ...createCategory,
    ...findAll,
    ...update,
    ...remove,
    ...bulkIdCheck,
};
