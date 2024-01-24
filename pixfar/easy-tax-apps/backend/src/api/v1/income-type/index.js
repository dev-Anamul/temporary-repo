const addIncomeType = require('./controllers/add-income-type');
const updateIncomeType = require('./controllers/update-income-type');
const deleteIncomeType = require('./controllers/delete-income-type');
const findIncomeType = require('./controllers/find-income-type');
const findIncomeTypes = require('./controllers/find-income-types');

module.exports = {
    ...addIncomeType,
    ...updateIncomeType,
    ...deleteIncomeType,
    ...findIncomeType,
    ...findIncomeTypes,
};
