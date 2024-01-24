const { TaxSlab } = require('../../model');

const findAllTaxSlabs = async () => {
    const options = {
        sort: { min: 1 },
    };
    const taxSlabs = await TaxSlab.find({}, null, options);
    return taxSlabs;
};

module.exports = { findAllTaxSlabs };
