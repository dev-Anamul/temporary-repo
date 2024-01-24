const { Depreciation } = require('../../model');

const addNewDepreciation = async ({
    accumulatedDepreciation,
    endingValue,
    assetId,
    depreciation,
    depreciationRate,
    fiscalYear,
    openingValue,
}) => {
    const newDepreciation = new Depreciation({
        accumulatedDepreciation,
        endingValue,
        assetId,
        depreciation,
        depreciationRate,
        fiscalYear,
        openingValue,
    });

    return newDepreciation.save();
};

module.exports = addNewDepreciation;
