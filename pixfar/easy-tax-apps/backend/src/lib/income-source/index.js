const create = require('./create');
const findAll = require('./find-all');
const findOne = require('./find');
const update = require('./update');
const remove = require('./remove');
const fiscalYearIncome = require('./fiscal-income');
const generateCsv = require('./generate-csv');

module.exports = {
    ...create,
    ...findAll,
    ...findOne,
    ...update,
    ...remove,
    ...fiscalYearIncome,
    ...generateCsv,
};
