const { catchAsync } = require('../../../../utils');
const assetService = require('../../../../lib/asset');

const deleteAsset = catchAsync(async (req, res) => {
    const { id } = req.params;

    const deletedAsset = await assetService.deleteAsset(id);

    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Asset deleted successfully',
        data: {
            asset: deletedAsset,
        },
    });
});

module.exports = { deleteAsset };
