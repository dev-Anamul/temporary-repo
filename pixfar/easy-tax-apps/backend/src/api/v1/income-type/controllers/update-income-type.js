const { catchAsync } = require('../../../../utils');
const incomeTypeService = require('../../../../lib/income-type');

const updateIncomeType = catchAsync(async (req, res) => {
    const { id } = req.params;

    const { name, description } = req.body;

    const incomeType = await incomeTypeService.updateIncomeType({ id, name, description });

    const response = {
        code: 200,
        status: 'success',
        message: 'Income type updated successfully',
        data: incomeType,
    };
    res.status(200).json(response);
});

module.exports = { updateIncomeType };
