const create = require('./create');
const findAll = require('./find-all');
const findSingle = require('./find-single');
const update = require('./update');
const remove = require('./delete');

module.exports = {
    ...create,
    ...findAll,
    ...findSingle,
    ...update,
    ...remove,
};
