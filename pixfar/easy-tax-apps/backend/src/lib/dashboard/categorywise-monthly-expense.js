const { Expense } = require('../../model');

const categoryWiseMonthlyExpense = async ({ userId, startDate, endDate }) => {
    // aggregate pipeline
    const pipeline = [
        {
            $sort: {
                expenseDate: 1,
                _id: -1,
            },
        },
        {
            $group: {
                _id: {
                    // year: { $year: '$expenseDate' },
                    // month: { $month: '$expenseDate' },
                    expenseType: '$expenseType',
                },
                totalAmount: { $sum: '$totalAmount' },
                claimableAmount: { $sum: '$claimableAmount' },
                count: { $sum: 1 },
            },
        },
        {
            $lookup: {
                from: 'categories',
                localField: '_id.expenseType',
                foreignField: '_id',
                as: 'expenseType',
            },
        },
        {
            $unwind: '$expenseType',
        },
        {
            $sort: {
                '_id.year': -1,
                '_id.month': -1,
            },
        },
        {
            $project: {
                _id: 0,
                expenseType: '$expenseType.name',
                totalAmount: 1,
                claimableAmount: 1,
            },
        },
    ];

    // if user id is present
    if (userId) {
        pipeline.unshift({
            $match: {
                userId,
                type: 'expense',
                expenseDate: {
                    $gte: startDate,
                    $lte: endDate,
                },
            },
        });
    }

    // if user id is not present
    if (!userId) {
        pipeline.unshift({
            $match: {
                type: 'expense',
                expenseDate: {
                    $gte: startDate,
                    $lte: endDate,
                },
            },
        });
    }

    // get the expenses
    const expenses = await Expense.aggregate(pipeline);

    return expenses;
};

module.exports = { categoryWiseMonthlyExpense };
