const { Types } = require('mongoose');
const { Depreciation } = require('../../model');

const findDepreciation = async (id) => Depreciation.findById(id);

const findDepreciationByAssetId = async (assetId) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Depreciation.find({ assetId: new Types.ObjectId(assetId) });

module.exports = {
    findDepreciation,
    findDepreciationByAssetId,
};
