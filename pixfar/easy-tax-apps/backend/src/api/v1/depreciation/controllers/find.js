const { catchAsync } = require('../../../../utils');
const depreciationService = require('../../../../lib/depreciation');

const findDepreciationByAssets = catchAsync(async (req, res) => {
    const { id } = req.params;

    const depreciation = await depreciationService.findDepreciationByAssetId(id);

    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Depreciation found successfully',
        data: depreciation,
    });
});

module.exports = { findDepreciationByAssets };
