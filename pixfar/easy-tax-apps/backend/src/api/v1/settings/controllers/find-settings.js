const { catchAsync } = require('../../../../utils');
const settingsService = require('../../../../lib/settings');

const findSettings = catchAsync(async (req, res) => {
    const appSettings = await settingsService.getAppSettings();

    const response = {
        status: 'success',
        message: 'Settings found successfully',
        data: appSettings,
    };

    res.status(200).json(response);
});

module.exports = { findSettings };
