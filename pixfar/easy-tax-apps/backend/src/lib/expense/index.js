const findAll = require('./find-all');
const createExpense = require('./create');
const findSingle = require('./find-single');
const update = require('./update');
const deleteExpense = require('./delete');
const generateCSV = require('./generate-csv');
const totalCostByCategory = require('./total-by-category');
const expenseByCategory = require('./expense-by-category');
const fiscalYearExpense = require('./fiscal-expense');
const expenseSummery = require('./expense-summery');

module.exports = {
    ...findAll,
    ...createExpense,
    ...findSingle,
    ...update,
    ...deleteExpense,
    ...generateCSV,
    ...totalCostByCategory,
    ...expenseByCategory,
    ...fiscalYearExpense,
    ...expenseSummery,
};
