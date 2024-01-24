/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
const { bulkIdCheck } = require('../../../../lib/category');
const { catchAsync, addSelfLinks } = require('../../../../utils');
const { addClaimableAmountAndUserId } = require('../utils');
const expenseService = require('../../../../lib/expense');

const createBulk = catchAsync(async (req, res) => {
    // extract data from req.body
    const { expenses: data } = req.body;
    const userId = req.user.id;

    // get all category ids
    const categoryIds = data.map((item) => item.expenseType);

    // check if all category ids exist
    const { categories, missingIds } = await bulkIdCheck(categoryIds);

    // if some category ids do not exist, return error
    if (missingIds.length > 0) {
        return res.status(400).json({
            message: 'Some categories do not exist',
            data: missingIds,
        });
    }

    // initialize assets and expenses
    let createdExpenses = [];

    // combine category and expense data
    const formattedData = data?.map((item) => {
        const category = categories.find((cat) => cat._id.toString() === item.expenseType);
        return {
            ...item,
            claimablePercentage: category.claimablePercentage,
            status: item?.totalAmount >= 1000 ? 'pending' : item?.status,
        };
    });

    // add userId and claimable amount
    const expenses = addClaimableAmountAndUserId(userId, formattedData);

    // send response
    const newExpenses = await expenseService.createBulkExpense(expenses);

    // add self links
    createdExpenses = addSelfLinks(newExpenses, req.originalUrl);

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully created expenses',
        expenses: createdExpenses,
        links: {
            self: req.originalUrl,
            all: req.originalUrl,
        },
    };
    return res.status(201).json(response);
});

module.exports = { createBulk };
