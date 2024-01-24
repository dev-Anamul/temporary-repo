/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils');
const fiscalYearService = require('../../../../lib/fiscal-year');

const addFiscalYear = catchAsync(async (req, res) => {
    const { fiscalYear, startDate, endDate } = req.body || {};

    const newFiscalYear = await fiscalYearService.createFiscalYear(fiscalYear, startDate, endDate);

    // generate response
    const response = {
        code: 201,
        status: 'success',
        message: 'Fiscal year created successfully',
        data: newFiscalYear,
        links: {
            self: req.originalUrl + fiscalYear._id,
        },
    };

    return res.status(201).json(response);
});

module.exports = { addFiscalYear };
