const expenseService = require('../../../../lib/expense');
const { catchAsync } = require('../../../../utils');

const generateCsv = catchAsync(async (req, res) => {
    const { path } = await expenseService.generateCsv();

    return res.status(200).json({
        status: 'success',
        data: {
            path,
        },
    });
});

module.exports = { generateCsv };
