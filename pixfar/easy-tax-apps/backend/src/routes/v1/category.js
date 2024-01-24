const router = require('express').Router();

const categoryController = require('../../api/v1/category');
const { authorize } = require('../../middleware/authorize');

router.get('/:id/expenses', authorize('customer'), categoryController.expenseByCategory);

router
    .route('/')
    .get(authorize('customer'), categoryController.findAll)
    .post(authorize('customer'), categoryController.createCategory);

router
    .route('/:id')
    .get(authorize('customer'), categoryController.findOne)
    .patch(authorize('customer'), categoryController.updateCategory)
    .delete(authorize('customer'), categoryController.removeCategory);

module.exports = router;
