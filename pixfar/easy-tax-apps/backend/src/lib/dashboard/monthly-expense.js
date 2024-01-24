const { Expense } = require('../../model');

const monthlyExpense = async ({ userId, startDate, endDate }) => {
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
                    year: { $year: '$expenseDate' },
                    month: { $month: '$expenseDate' },
                },
                totalAmount: { $sum: '$totalAmount' },
                claimableAmount: { $sum: '$claimableAmount' },
                count: { $sum: 1 },
            },
        },
        {
            $sort: {
                '_id.year': -1,
                '_id.month': -1,
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

// export the module
module.exports = { monthlyExpense };
