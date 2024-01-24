const { catchAsync } = require('../../../../utils');
const fiscalYearService = require('../../../../lib/fiscal-year');
const _default = require('../../../../config/default');

const findFiscalYear = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page, 10) || _default.page;
    const limit = parseInt(req.query.limit, 10) || _default.limit;

    const foundFiscalYears = await fiscalYearService.findAllFiscalYears(page, limit);

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Fiscal years retrieved successfully',
        data: foundFiscalYears,
    };

    return res.status(200).json(response);
});

module.exports = { findFiscalYear };
