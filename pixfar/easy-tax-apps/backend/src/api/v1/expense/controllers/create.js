/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
const dayjs = require('dayjs');
const { catchAsync, AppError, generateGstClaimableAmount } = require('../../../../utils');
const expenseService = require('../../../../lib/expense');
const categoryService = require('../../../../lib/category');
const { processOcr } = require('../../../../lib/azure');

const createExpense = catchAsync(async (req, res, next) => {
    // extract user id
    let userId = req.user.id;

    // if user is admin then extract user id from request body
    if (req.user.role === 'admin') {
        userId = req.body.userId;
    }

    // extract data from request body
    const { expenseName, description, expenseType, totalAmount, isGSTClaimable, expenseDate } =
        req.body || {};

    // file path
    const filePath = `${process.env.APP_URL}/ocrs/${req?.file?.filename}`;

    // check if expense type is valid
    const hasExpenseType = await categoryService.getCategoryById(expenseType);

    // if expense type does not exist then throw error
    if (!hasExpenseType) {
        return next(new AppError('Expense type does not exist', 400, 'Bad Request'));
    }

    // define the initial status
    let initStatus = 'approved';
    // if total amount is greater than 1000 then status is pending

    // this api only call admin user
    if (totalAmount >= 1000) {
        initStatus = 'pending';
    }

    // if total amount is less than 1000 then create expense
    // calculate required amount amount
    const gstClaimableAmount = generateGstClaimableAmount({
        amount: totalAmount,
        isGSTClaimable: JSON.parse(isGSTClaimable),
    });
    const subTotal = totalAmount - gstClaimableAmount;
    const claimableAmount = (subTotal * hasExpenseType.claimablePercentage).toFixed(2);

    // create expense
    const expense = await expenseService.createExpense({
        expenseName,
        description,
        expenseType,
        totalAmount,
        gstAmount: gstClaimableAmount,
        claimableAmount,
        isGSTClaimable,
        expenseDate: dayjs(expenseDate).format('YYYY-MM-DD'),
        userId,
        ocrAmount: 0,
        status: initStatus,
        imageUrl: filePath || null,
    });

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully created expense',
        data: expense,
        links: {
            self: req.originalUrl + expense._id,
            all: req.originalUrl,
        },
    };

    // send response
    res.status(200).json(response);

    // process ocr
    const { amount, status } = await processOcr({ filePath, totalAmount });

    // update expense
    const expe = await expenseService.updateExpenseStatus({
        id: expense._id,
        ocrAmount: amount,
        status,
    });

    // generate response
    return expe;
});

module.exports = { createExpense };
