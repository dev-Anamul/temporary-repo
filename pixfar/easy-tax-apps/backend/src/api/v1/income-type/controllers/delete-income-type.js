const { catchAsync } = require('../../../../utils');
const incomeTypeService = require('../../../../lib/income-type');

const deleteIncomeType = catchAsync(async (req, res) => {
    const { id } = req.params;

    await incomeTypeService.deleteIncomeType(id);

    const response = {
        code: 200,
        status: 'success',
        message: 'Income type deleted successfully',
    };

    res.status(200).json(response);
});

module.exports = { deleteIncomeType };
