const { catchAsync } = require('../../../../utils');
const taxService = require('../../../../lib/tax');

const adminTax = catchAsync(async (req, res) => {
    const { userId } = req.params || {};
    const { years } = req.query || 10;

    console.log(userId, years);

    const taxes = await taxService.fiscalYearTaxes({ userId, numOfYear: years });
    const response = {
        status: 'success',
        message: 'Tax created successfully',
        data: taxes,
    };

    res.status(201).json(response);
});

module.exports = { adminTax };
