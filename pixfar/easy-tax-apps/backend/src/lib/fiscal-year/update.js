const dayjs = require('dayjs');
const { AppError } = require('../../utils');
const { findFiscalYearById } = require('./find-single');

const updateFiscalYear = async (id, fiscalYear, startDate, endDate) => {
    const existFiscalYear = await findFiscalYearById(id);

    if (!existFiscalYear) throw new AppError('Fiscal Year does not exist', 400, 'Bad Request');

    existFiscalYear.fiscalYear = fiscalYear || existFiscalYear.fiscalYear;
    existFiscalYear.startDate = startDate
        ? dayjs(startDate).format('YYYY-MM-DD')
        : existFiscalYear.startDate;

    existFiscalYear.endDate = endDate
        ? dayjs(endDate).format('YYYY-MM-DD')
        : existFiscalYear.endDate;

    // save the fiscal year
    return existFiscalYear.save();
};

module.exports = { updateFiscalYear };
