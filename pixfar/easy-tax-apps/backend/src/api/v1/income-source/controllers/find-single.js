const { catchAsync, AppError } = require('../../../../utils');
const incomeSourceService = require('../../../../lib/income-source');

const findOne = catchAsync(async (req, res, next) => {
    const { id } = req.params || {};

    const incomeSource = await incomeSourceService.findIncomeSourceByIdAndUserId(id, req.user.id);

    if (!incomeSource) {
        return next(new AppError('Income source does not exist', 400, 'Bad Request'));
    }

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully retrieved income source',
        data: incomeSource,
        links: {
            self: req.originalUrl,
            all: req.baseUrl,
        },
    };

    return res.status(200).json(response);
});

module.exports = { findOne };
