const { catchAsync } = require('../../../../utils');
const assetsService = require('../../../../lib/asset');

const updateAssets = catchAsync(async (req, res) => {
    const { id } = req.params;
    const {
        name,
        description,
        purchaseDate,
        purchasePrice,
        status,
        category,
        isSold,
        saleDate,
        salePrice,
    } = req.body;

    const updatedAsset = await assetsService.updateAsset({
        id,
        category,
        description,
        isSold,
        status,
        name,
        purchaseDate,
        purchasePrice,
        saleDate,
        salePrice,
    });

    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Asset updated successfully',
        data: {
            asset: updatedAsset,
        },
    });
});

module.exports = { updateAssets };
