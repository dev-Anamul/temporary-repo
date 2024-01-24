const { catchAsync } = require('../../../../utils');
const taxSlabService = require('../../../../lib/tax-slab');

const findSingleTaxSlab = catchAsync(async (req, res) => {
    const { id } = req.params;

    const taxSlab = await taxSlabService.findSingleTaxSlab(id);

    const response = {
        code: 200,
        status: 'success',
        message: 'Tax slab retrieved successfully',
        data: {
            ...taxSlab?._doc,
        },
        links: {
            self: req.originalUrl,
            create: '/api/v1/tax-slabs',
        },
    };

    res.status(200).json(response);
});

module.exports = { findSingleTaxSlab };
