const { catchAsync } = require('../../../../utils');
const incomeTypeService = require('../../../../lib/income-type');

const addIncomeType = catchAsync(async (req, res) => {
    const { name, description } = req.body;

    const incomeType = await incomeTypeService.createIncomeType({ name, description });

    const response = {
        code: 201,
        status: 'success',
        message: 'Income type added successfully',
        data: incomeType,
    };

    res.status(201).json(response);
});

module.exports = { addIncomeType };
