const { AppError } = require('../../utils');
const { findSingleTaxSlab, checkTaxSlabBySingleValue } = require('./find-single');

// eslint-disable-next-line object-curly-newline
const updateTaxSlab = async ({ id, min, max, rate }) => {
    const taxSlab = await findSingleTaxSlab(id);

    if (!taxSlab) {
        throw new AppError('No tax slab found with this ID', 404, 'Not Found');
    }

    // if (taxSlab.min === min && taxSlab.max === max && taxSlab.rate !== rate) {
    //     taxSlab.rate = rate || taxSlab.rate;
    //     return taxSlab.save();
    // }

    // if (min && (await checkTaxSlabBySingleValue(min))) {
    //     throw new AppError('Tax slab already exists', 400, 'Bad Request');
    // }

    // if (max && (await checkTaxSlabBySingleValue(max))) {
    //     throw new AppError('Tax slab already exists', 400, 'Bad Request');
    // }

    taxSlab.min = min || taxSlab.min;
    taxSlab.max = max || taxSlab.max;
    taxSlab.rate = rate || taxSlab.rate;
    taxSlab.range = `${taxSlab.min}-${taxSlab.max}`;

    return taxSlab.save();
};

module.exports = { updateTaxSlab };
