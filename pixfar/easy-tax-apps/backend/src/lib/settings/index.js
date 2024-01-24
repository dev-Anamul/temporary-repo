/**
 * GET APP SETTINGS
 * @returns  {Object}  App settings
 */
const { Settings } = require('../../model');

const getAppSettings = async () => {
    const appSettings = await Settings.findOne();
    return appSettings;
};

/**
 * add and update app settings
 * @param {Object} param.webLogo
 * @returns {Promise}  App settings
 */

const addAndUpdateAppSettings = async ({
    webLogo,
    mobileLogo,
    fevIcon,
    title,
    appTitle,
    appDescription,
    fiscalStartMonth,
    fiscalEndMonth,
}) => {
    const appSettings = await getAppSettings();

    if (appSettings) {
        appSettings.webLogo = webLogo || appSettings.webLogo;
        appSettings.mobileLogo = mobileLogo || appSettings.mobileLogo;
        appSettings.fevIcon = fevIcon || appSettings.fevIcon;
        appSettings.title = title || appSettings.title;
        appSettings.appTitle = appTitle || appSettings.appTitle;
        appSettings.appDescription = appDescription || appSettings.appDescription;
        appSettings.fiscalStartMonth = fiscalStartMonth || appSettings.fiscalStartMonth;
        appSettings.fiscalEndMonth = fiscalEndMonth || appSettings.fiscalEndMonth;

        return appSettings.save();
    }

    const newAppSettings = new Settings({
        webLogo,
        mobileLogo,
        fevIcon,
        title,
        appTitle,
        appDescription,
        fiscalStartMonth,
        fiscalEndMonth,
    });

    return newAppSettings.save();
};

module.exports = {
    getAppSettings,
    addAndUpdateAppSettings,
};
