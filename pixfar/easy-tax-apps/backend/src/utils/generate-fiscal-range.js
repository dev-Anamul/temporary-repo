const { getAppSettings } = require('../lib/settings');
const { AppError } = require('./AppError');
const { getLastDateOfMonth } = require('./get-days-of-month');

const generateFiscalRange = async (numOfYear) => {
    const ranges = [];
    const currentDate = new Date();

    const settings = await getAppSettings();

    if (!settings) throw new AppError('Please set fiscal year first', 404, 'Not Found');

    const endMonthLastDate = getLastDateOfMonth(2);

    for (let i = 0; i < numOfYear; i += 1) {
        const currentYear = currentDate.getFullYear() - i;
        const fiscalYearStart = new Date(currentYear, 3, 1);
        const fiscalYearEnd = new Date(currentYear + 1, 2, endMonthLastDate);

        ranges.push({
            fiscal_year: `${fiscalYearStart.getFullYear()}-${fiscalYearEnd.getFullYear()}`,
            start: fiscalYearStart,
            end: fiscalYearEnd,
        });
    }

    return ranges;
};

module.exports = { generateFiscalRange };
