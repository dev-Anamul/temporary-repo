const { Expense } = require('../../model');

const dailyExpense = async ({ userId, startDate, endDate }) => {
    const pipeline = [
        {
            $group: {
                _id: {
                    year: { $year: '$expenseDate' },
                    month: { $month: '$expenseDate' },
                    // week: { $week: '$expenseDate' },
                    day: { $dayOfMonth: '$expenseDate' },
                },
                expense: { $sum: '$totalAmount' },
                claimableAmount: { $sum: '$claimableAmount' },
                count: { $sum: 1 },
            },
        },
        {
            $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 },
        },
    ];

    if (userId) {
        pipeline.unshift({
            $match: {
                userId,
                type: 'expense',
                expenseDate: { $gte: startDate, $lte: endDate },
            },
        });
    }

    if (!userId) {
        pipeline.unshift({
            $match: {
                type: 'expense',
                expenseDate: { $gte: startDate, $lte: endDate },
            },
        });
    }

    return Expense.aggregate(pipeline);
};

// export the module
module.exports = { dailyExpense };
