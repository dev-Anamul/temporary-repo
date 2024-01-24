const { FiscalYear } = require('../../model');

const findFiscalYearById = async (id) => {
    const fiscalYear = await FiscalYear.findById(id);

    return fiscalYear;
};

module.exports = { findFiscalYearById };
