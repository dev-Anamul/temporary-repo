const { AppError } = require('../../utils');
const { findAsset } = require('./find-asset');

const deleteAsset = async (id) => {
    const asset = await findAsset(id);

    if (!asset) {
        throw new AppError('Asset not found', 404, 'Not Found');
    }

    await asset.deleteOne();

    return asset;
};

module.exports = deleteAsset;
