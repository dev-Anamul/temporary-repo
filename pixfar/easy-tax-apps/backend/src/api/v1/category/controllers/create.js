/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils');
const categoryService = require('../../../../lib/category');

const createCategory = catchAsync(async (req, res) => {
    const { name, description, claimablePercentage, depreciationRate } = req.body || {};

    const category = await categoryService.createCategory({
        name,
        description,
        claimablePercentage,
        depreciationRate,
    });

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully created category',
        data: category,
        links: {
            self: req.originalUrl + category._id,
            all: req.originalUrl,
        },
    };

    return res.status(200).json(response);
});

module.exports = { createCategory };