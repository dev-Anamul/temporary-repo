const router = require('express').Router();
const incomeTypeController = require('../../api/v1/income-type');

// version route
router
    .route('/')
    .post(incomeTypeController.addIncomeType)
    .get(incomeTypeController.findIncomeTypes);

router
    .route('/:id')
    .get(incomeTypeController.findIncomeType)
    .patch(incomeTypeController.updateIncomeType)
    .delete(incomeTypeController.deleteIncomeType);

// export router
module.exports = router;
