const { Asset } = require('../../model');

const addNewAsset = async ({
    name,
    description,
    purchaseDate,
    purchasePrice,
    accumulatedDepreciation,
    endingValue,
    category,
    depreciationMethod,
    lastDepreciationDate,
    isSold,
    saleDate,
    salePrice,
    userId,
    status,
}) => {
    const newAsset = new Asset({
        name,
        category,
        depreciationMethod,
        accumulatedDepreciation: accumulatedDepreciation ?? 0,
        lastDepreciationDate: lastDepreciationDate ?? purchaseDate,
        endingValue: endingValue ?? purchasePrice,
        purchaseDate,
        purchasePrice,
        userId,
        description,
        isSold,
        saleDate,
        salePrice,
        status,
    });

    return newAsset.save();
};

module.exports = addNewAsset;
