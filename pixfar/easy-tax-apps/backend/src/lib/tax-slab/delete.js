const { AppError } = require('../../utils');
const { findSingleTaxSlab } = require('./find-single');

const deleteTaxSlab = async (id) => {
    const taxSlab = await findSingleTaxSlab(id);

    if (!taxSlab) {
        throw new AppError('No tax slab found with this ID', 404, 'Not Found');
    }

    return taxSlab.deleteOne();
};

module.exports = { deleteTaxSlab };
