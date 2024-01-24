const router = require('express').Router();

const dashboardController = require('../../api/v1/dashboard');

// routes for dashboard
router.get('/', dashboardController.dashboardData);
router.get('/daily-expense', dashboardController.dailyExpense);
router.get('/monthly-expense', dashboardController.monthlyExpense);

module.exports = router;
