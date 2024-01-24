const router = require('express').Router();
const expenseController = require('../../api/v1/expense');
const { authorize } = require('../../middleware/authorize');
const { uploadOCRfile } = require('../../middleware/upload-file');

router.post('/bulk', authorize('customer'), expenseController.createBulk);

router.get('/csv', authorize('customer'), expenseController.generateCsv);
router.get('/total-by-category', authorize('customer'), expenseController.costByCategory);

router
    .route('/')
    .get(authorize('customer'), expenseController.findAll)
    .post(authorize('customer'), uploadOCRfile, expenseController.createExpense);

router
    .route('/:id')
    .get(authorize('customer'), expenseController.findOne)
    .patch(authorize('customer'), expenseController.updateExpense)
    .delete(authorize('customer'), expenseController.removeExpense);

// export the modules
module.exports = router;
