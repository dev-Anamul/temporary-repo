const findAll = require('./controllers/find-all');
const createExpense = require('./controllers/create');
const findSingle = require('./controllers/find-single');
const updateExpense = require('./controllers/update');
const deleteExpense = require('./controllers/remove');
const bulkCreate = require('./controllers/create-bulk');
const generateCSV = require('./controllers/generate-csv');
const totalCostByCategory = require('./controllers/total-cost-by-category');

module.exports = {
    ...findAll,
    ...createExpense,
    ...findSingle,
    ...updateExpense,
    ...deleteExpense,
    ...bulkCreate,
    ...generateCSV,
    ...totalCostByCategory,
};
