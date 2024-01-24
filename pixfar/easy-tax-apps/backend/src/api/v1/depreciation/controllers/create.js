const { catchAsync } = require('../../../../utils');
const cronJobService = require('../../../../lib/assets-cron');

const createDepreciation = catchAsync(async (req, res) => {
    await cronJobService.calculateDepreciation();

    return res.status(201).json({
        code: 201,
        status: 'success',
        message: 'Depreciation added successfully',
    });
});

module.exports = { createDepreciation };
