const { FiscalYear } = require('../../model');

const findAllFiscalYears = async (page, limit) => {
    const skip = (page - 1) * limit;

    const options = {
        skip,
        limit,
        sort: { createdAt: -1 },
    };

    const fiscalYears = await FiscalYear.find(null, null, options);

    return fiscalYears.map((fiscalYear) => fiscalYear._doc);
};

module.exports = { findAllFiscalYears };
