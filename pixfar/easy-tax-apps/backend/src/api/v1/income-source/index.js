const generateCsv = require('./controllers/generate-csv');
const create = require('./controllers/create');
const findAll = require('./controllers/find-all');
const findOne = require('./controllers/find-single');
const update = require('./controllers/update');
const remove = require('./controllers/remove');
const findAllForAdmin = require('./controllers/find-all-for-admin');
const incomeByCategoryController = require('./controllers/income-by-category');

module.exports = {
    ...create,
    ...findAll,
    ...findOne,
    ...update,
    ...remove,
    ...findAllForAdmin,
    ...incomeByCategoryController,
    ...generateCsv,
};
