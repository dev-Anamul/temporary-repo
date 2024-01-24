const dayjs = require('dayjs');
const { FiscalYear } = require('../../model');

const createFiscalYear = async (fiscalYear, startDate, endDate) => {
    const newFiscalYear = new FiscalYear({
        fiscalYear,
        startDate: dayjs(startDate).format('YYYY-MM-DD'),
        endDate: dayjs(endDate).format('YYYY-MM-DD'),
    });

    return newFiscalYear.save();
};

module.exports = { createFiscalYear };
