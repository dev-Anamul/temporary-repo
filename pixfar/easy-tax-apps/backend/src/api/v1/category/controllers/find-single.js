const { catchAsync, AppError } = require('../../../../utils');
const categoryService = require('../../../../lib/category');

const findOne = catchAsync(async (req, res, next) => {
    const { id } = req.params || {};

    const category = await categoryService.getCategoryById(id);

    if (!category) return next(new AppError('Category does not exist', 400, 'Bad Request'));

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully retrieved category',
        data: category,
        links: {
            self: req.originalUrl,
            all: `${req.baseUrl}/categories`,
        },
    };

    // send response
    return res.status(200).json(response);
});

module.exports = { findOne };
