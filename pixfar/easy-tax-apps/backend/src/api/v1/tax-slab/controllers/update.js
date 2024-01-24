const { catchAsync } = require('../../../../utils');
const taxSlabService = require('../../../../lib/tax-slab');

const updateTaxSlab = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { min, max, rate } = req.body || {};

    const taxSlab = await taxSlabService.updateTaxSlab({
        id,
        min,
        max,
        rate,
    });

    const response = {
        code: 200,
        status: 'success',
        message: 'Tax slab updated successfully',
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

module.exports = { updateTaxSlab };
