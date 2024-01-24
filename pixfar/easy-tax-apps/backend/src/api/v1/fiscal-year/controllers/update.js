const { catchAsync } = require('../../../../utils');
const fiscalYearService = require('../../../../lib/fiscal-year');

const upgradeFiscalYear = catchAsync(async (req, res) => {
    const { id } = req.params || {};

    const { fiscalYear, startDate, endDate } = req.body || {};

    const updatedFiscalYear = await fiscalYearService.updateFiscalYear(
        id,
        fiscalYear,
        startDate,
        endDate
    );

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Fiscal year upgraded successfully',
        data: updatedFiscalYear,
    };

    return res.status(200).json(response);
});

module.exports = { upgradeFiscalYear };
