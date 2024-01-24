const { AppError } = require('../../utils');
const { findAsset } = require('./find-asset');

const updateAsset = async ({
    id,
    name,
    description,
    accumulatedDepreciation,
    endingValue,
    purchaseDate,
    purchasePrice,
    category,
    depreciationMethod,
    lastDepreciationDate,
    isSold,
    status,
    saleDate,
    salePrice,
}) => {
    const asset = await findAsset(id);

    if (!asset) {
        throw new AppError('Asset not found', 404, 'Not Found');
    }

    asset.name = name ?? asset.name;
    asset.description = description ?? asset.description;
    asset.accumulatedDepreciation = accumulatedDepreciation ?? asset.accumulatedDepreciation;
    asset.endingValue = endingValue ?? asset.endingValue;
    asset.purchaseDate = purchaseDate ?? asset.purchaseDate;
    asset.purchasePrice = purchasePrice ?? asset.purchasePrice;
    asset.category = category ?? asset.category;
    asset.depreciationMethod = depreciationMethod ?? asset.depreciationMethod;
    asset.lastDepreciationDate = lastDepreciationDate ?? asset.lastDepreciationDate;
    asset.isSold = isSold ?? asset.isSold;
    asset.saleDate = saleDate ?? asset.saleDate;
    asset.salePrice = salePrice ?? asset.salePrice;
    asset.status = status ?? asset.status;

    await asset.save();

    return asset;
};

module.exports = updateAsset;
