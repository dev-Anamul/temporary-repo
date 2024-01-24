const { catchAsync } = require('../../../../utils');
const incomeSourceService = require('../../../../lib/income-source');

const generateCsv = catchAsync(async (req, res) => {
    const { path } = await incomeSourceService.generateCsv();
    const response = {
        code: 200,
        status: 'success',
        data: {
            path,
        },
    };

    res.status(200).json(response);
});

module.exports = { generateCsv };
