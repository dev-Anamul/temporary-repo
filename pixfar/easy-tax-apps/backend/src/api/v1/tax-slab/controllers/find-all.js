const { catchAsync } = require('../../../../utils');
const taxSlabService = require('../../../../lib/tax-slab');

const findAllTaxSlabs = catchAsync(async (req, res) => {
    const taxSlabs = await taxSlabService.findAllTaxSlabs();

    const response = {
        code: 200,
        status: 'success',
        message: 'Tax slabs retrieved successfully',
        data: [...taxSlabs],
        links: {
            self: req.originalUrl,
            create: '/api/v1/tax-slabs',
        },
    };

    res.status(200).json(response);
});

module.exports = { findAllTaxSlabs };
