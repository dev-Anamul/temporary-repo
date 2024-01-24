const { TaxSlab } = require('../../model');

const findSingleTaxSlab = async (id) => {
    const taxSlab = await TaxSlab.findById(id);
    return taxSlab;
};

// check if the tax slab already exists based min and max
const findTaxSlabByRange = async ({ min, max }) => {
    const taxSlab = await TaxSlab.findOne({
        $or: [{ min: { $gte: min, $lte: max } }, { max: { $gte: min, $lte: max } }],
    });

    return taxSlab;
};

// check min value already in the range of existing tax slab
const checkTaxSlabBySingleValue = async (value) => {
    const taxSlabsWithMin = await TaxSlab.findOne({
        $and: [{ min: { $lte: value } }, { max: { $gte: value } }],
    });
    return taxSlabsWithMin;
};

module.exports = {
    findSingleTaxSlab,
    findTaxSlabByRange,
    checkTaxSlabBySingleValue,
};
