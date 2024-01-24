const findAll = require('./controllers/find-all');
const findSingle = require('./controllers/find-single');
const create = require('./controllers/create');
const update = require('./controllers/update');
const remove = require('./controllers/delete');

module.exports = {
    ...findAll,
    ...findSingle,
    ...create,
    ...update,
    ...remove,
};
