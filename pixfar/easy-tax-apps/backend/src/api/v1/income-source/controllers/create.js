/* eslint-disable object-curly-newline */
const { catchAsync, AppError } = require('../../../../utils');
const incomeSourceService = require('../../../../lib/income-source');
const incomeTypeService = require('../../../../lib/income-type');

const create = catchAsync(async (req, res) => {
    // eslint-disable-next-line operator-linebreak
    const { incomeSource, amount, description, startDate, endDate, incomeType, incomeDate } =
        req.body || {};

    const userId = req.user.id;

    // if income type is manual then set status to pending
    let status = 'approved';
    if (incomeSource?.toLowerCase() === 'manual') status = 'pending';

    // check if income type exists
    const isIncomeTypeExists = await incomeTypeService.findIncomeType(incomeType);
    if (!isIncomeTypeExists) throw new AppError('Income type not found', 404, 'Not Found');

    // create income source
    const incomeSourceData = await incomeSourceService.create({
        incomeSource,
        amount,
        description,
        startDate,
        endDate,
        incomeType,
        status,
        userId,
        incomeDate,
    });

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully created income source',
        data: incomeSourceData,
        links: {
            self: req.originalUrl + incomeSourceData._id,
            all: req.originalUrl,
        },
    };

    // send response
    return res.status(201).json(response);
});

module.exports = { create };
