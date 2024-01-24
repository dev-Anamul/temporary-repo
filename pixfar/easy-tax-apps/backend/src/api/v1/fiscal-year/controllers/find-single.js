const { catchAsync, AppError } = require('../../../../utils');
const fiscalYearService = require('../../../../lib/fiscal-year');

const findOneFiscalYear = catchAsync(async (req, res) => {
    const { id } = req.params || {};

    const fiscalYear = await fiscalYearService.findFiscalYearById(id);

    if (!fiscalYear) throw new AppError('Fiscal Year does not exist', 400, 'Bad Request');

    const response = {
        code: 200,
        status: 'success',
        message: 'Fiscal year found successfully',
        data: fiscalYear,
    };

    return res.status(200).json(response);
});

module.exports = { findOneFiscalYear };
