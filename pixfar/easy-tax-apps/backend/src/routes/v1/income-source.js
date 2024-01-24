const router = require('express').Router();

const incomeSourceController = require('../../api/v1/income-source');
const dashboardController = require('../../api/v1/dashboard');

const { authorize } = require('../../middleware/authorize');

router.get('/income-by-category', incomeSourceController.incomeByCategoryController);
router.get('/daily-income', dashboardController.dailyIncomeController);
router.get('/monthly-income', dashboardController.monthlyIncome);
router.get('/csv', incomeSourceController.generateCsv);

router
    .route('/')
    .get(authorize('customer'), incomeSourceController.findAll)
    .post(authorize('customer'), incomeSourceController.create);

router
    .route('/:id')
    .get(authorize('customer'), incomeSourceController.findOne)
    .patch(authorize('customer'), incomeSourceController.updateOne)
    .delete(authorize('customer'), incomeSourceController.remove);

module.exports = router;
