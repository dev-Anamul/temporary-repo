const { catchAsync } = require('../../../../utils');
const fiscalYearService = require('../../../../lib/fiscal-year');

const removeFiscalYear = catchAsync(async (req, res) => {
    const { id } = req.params || {};

    await fiscalYearService.deleteFiscalYear(id);

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Fiscal year deleted successfully',
        data: null,
    };

    return res.status(200).json(response);
});

module.exports = { removeFiscalYear };
