const dashboard = require('./controllers/dashboard');
const dailyExpense = require('./controllers/daily-expense');
const monthlyExpense = require('./controllers/monthly-expense');
const dailyIncome = require('./controllers/daily-income-expense');
const monthlyIncome = require('./controllers/monthly-income');
const dailyIncomeController = require('./controllers/daily-income');
const monthlyIncomeExpenses = require('./controllers/monthly-income-expenses');

module.exports = {
    ...dashboard,
    ...dailyExpense,
    ...monthlyExpense,
    ...dailyIncome,
    ...monthlyIncome,
    ...dailyIncomeController,
    ...monthlyIncomeExpenses,
};
