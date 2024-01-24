const topItem = require('./top-item');
const totalItem = require('./total-item');
const dailyExpense = require('./daily-expense');
const monthlyExpense = require('./monthly-expense');
const dailyIncome = require('./daily-income');
const monthlyIncome = require('./monthly-income');
const categoriWiseMonthly = require('./categorywise-monthly-expense');

module.exports = {
    ...topItem,
    ...totalItem,
    ...dailyExpense,
    ...monthlyExpense,
    ...dailyIncome,
    ...monthlyIncome,
    ...categoriWiseMonthly,
};
