/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils');
const settingsService = require('../../../../lib/settings');

const createUpdateSettings = catchAsync(async (req, res) => {
    const { title, appTitle, appDescription, fiscalStartMonth, fiscalEndMonth } = req.body;

    const newAppSettings = await settingsService.addAndUpdateAppSettings({
        webLogo: req?.files?.webLogo?.[0]?.filename
            ? `${process.env.APP_URL}/settings/${req?.files?.webLogo?.[0]?.filename}`
            : null,
        mobileLogo: req?.files?.mobileLogo?.[0]?.filename
            ? `${process.env.APP_URL}/settings/${req?.files?.mobileLogo?.[0]?.filename}`
            : null,
        fevIcon: req?.files?.fevIcon?.[0]?.filename
            ? `${process.env.APP_URL}/settings/${req?.files?.fevIcon?.[0]?.filename}`
            : null,
        title,
        appTitle,
        appDescription,
        fiscalStartMonth,
        fiscalEndMonth,
    });

    const response = {
        status: 'success',
        message: 'Settings created successfully',
        data: newAppSettings,
    };

    res.status(201).json(response);
});

module.exports = { createUpdateSettings };
