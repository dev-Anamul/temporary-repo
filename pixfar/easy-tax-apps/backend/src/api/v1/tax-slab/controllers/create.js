const { catchAsync, AppError } = require('../../../../utils');
const taxSlabService = require('../../../../lib/tax-slab');

const createNewTaxSlab = catchAsync(async (req, res, next) => {
    const { min, max, rate } = req.body;

    // const existingTaxSlab = await taxSlabService.findTaxSlabByRange({ max, min });

    // if (existingTaxSlab) {
    //     return next(new AppError('Tax slab already exists', 409, 'Conflict'));
    // }

    const taxSlab = await taxSlabService.createTaxSlab({ min, max, rate });

    const response = {
        code: 201,
        status: 'success',
        message: 'Tax slab created successfully',
        data: {
            ...taxSlab._doc,
        },
        links: {
            self: req.originalUrl,
            all: '/api/v1/tax-slabs',
        },
    };

    return res.status(201).json(response);
});

module.exports = { createNewTaxSlab };
