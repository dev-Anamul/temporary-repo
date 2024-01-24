const { catchAsync, AppError } = require('../../../../utils');
const incomeTypeService = require('../../../../lib/income-type');

const findIncomeType = catchAsync(async (req, res) => {
    const { id } = req.params;

    const incomeType = await incomeTypeService.findIncomeType(id);

    if (!incomeType) {
        throw new AppError('Income type not found', 404, 'Not Found');
    }

    const response = {
        code: 200,
        status: 'success',
        message: 'Income types retrieved successfully',
        data: incomeType,
    };

    res.status(200).json(response);
});

module.exports = { findIncomeType };
