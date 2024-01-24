const router = require('express').Router();

const fiscalYearController = require('../../api/v1/fiscal-year');

// fiscal year routes
router.route('/').get(fiscalYearController.findFiscalYear).post(fiscalYearController.addFiscalYear);

router
    .route('/:id')
    .get(fiscalYearController.findOneFiscalYear)
    .patch(fiscalYearController.upgradeFiscalYear)
    .delete(fiscalYearController.removeFiscalYear);

// export router
module.exports = router;
