const router = require('express').Router();
const adminController = require('../../api/v1/admin');
const ocrExpenseController = require('../../api/v1/ocr-expense');
const { authorize } = require('../../middleware/authorize');
const notificationController = require('../../api/v1/notifications');
const incomeSourceController = require('../../api/v1/income-source');
const dashboardController = require('../../api/v1/dashboard');

// only for admin authorization
router.use(authorize('admin'));

// user routes for admin
router.route('/users').get(adminController.findAll).post(adminController.createUser);
router.get('/dashboard', dashboardController.adminDashboardData);
router.get('/dashboard/daily-income-expense', dashboardController.dailyIncomeAndExpense);
router.get('/dashboard/monthly-income-expense', dashboardController.monthlyIncomeExpenses);

router
    .route('/users/:id')
    .get(adminController.findSingleUser)
    .patch(adminController.updateUser)
    .delete(adminController.deleteUser);

// ocr expense routes for admin
router.route('/ocr-expenses').get(ocrExpenseController.findAllForAdmin);

// expense routes for admin
// todo: add this route to swagger docs
router.route('/expenses').get(adminController.findAllExpenses);
router.get('/notifications', notificationController.findAllForAdmin);
router.get('/notifications/:id', notificationController.findSingleForAdmin);
router.get('/income-sources', incomeSourceController.findAllForAdmin);

// export router
module.exports = router;
