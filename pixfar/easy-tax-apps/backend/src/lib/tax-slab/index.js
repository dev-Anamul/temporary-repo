const findAll = require('./find-all');
const findSingle = require('./find-single');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

module.exports = {
    ...findAll,
    ...findSingle,
    ...create,
    ...update,
    ...remove,
};
