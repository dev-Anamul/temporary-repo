const { catchAsync } = require('../../../../utils');
const categoryService = require('../../../../lib/category');

const removeCategory = catchAsync(async (req, res) => {
    const { id } = req.params;

    await categoryService.deleteOne(id);

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully deleted category',
    };

    return res.status(200).json(response);
});

module.exports = { removeCategory };
