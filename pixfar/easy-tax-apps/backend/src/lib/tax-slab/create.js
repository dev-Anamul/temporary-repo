const { TaxSlab } = require('../../model');

const createTaxSlab = async ({ min, max, rate }) => {
    const taxSlab = new TaxSlab({
        min,
        max,
        rate,
        range: `${min}-${max}`,
    });
    return taxSlab.save();
};

module.exports = { createTaxSlab };
