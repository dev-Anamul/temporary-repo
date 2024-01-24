const { catchAsync } = require('../../../../utils');
const assetService = require('../../../../lib/asset');

const addNewAsset = catchAsync(async (req, res) => {
    const userId = req.user._id;

    const {
        name,
        description,
        purchaseDate,
        purchasePrice,
        category,
        isSold,
        saleDate,
        salePrice,
    } = req.body;

    const newAsset = await assetService.addAsset({
        accumulatedDepreciation: 0,
        category,
        depreciationMethod: 'Straight Line',
        description,
        endingValue: purchasePrice,
        lastDepreciationDate: purchaseDate,
        name,
        purchaseDate,
        purchasePrice,
        userId,
        isSold,
        saleDate,
        salePrice,
    });

    return res.status(201).json({
        code: 201,
        status: 'success',
        message: 'Asset added successfully',
        data: {
            asset: newAsset,
        },
    });
});

module.exports = { addNewAsset };
