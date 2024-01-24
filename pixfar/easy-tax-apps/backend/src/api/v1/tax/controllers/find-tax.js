const { catchAsync } = require('../../../../utils');
const taxService = require('../../../../lib/tax');

const userTax = catchAsync(async (req, res) => {
    const { years } = req.params || 10;
    const userId = req.user._id;

    const taxes = await taxService.fiscalYearTaxes({ userId, numOfYear: years });
    const response = {
        status: 'success',
        message: 'Tax created successfully',
        data: taxes,
    };

    res.status(201).json(response);
});

module.exports = { userTax };
