const { Expense } = require('../../model');

const totalCostByCategory = ({ userId, startDate, endDate }) => {
    const aggPipeline = [
        {
            $group: {
                _id: '$expenseType',
                totalCost: { $sum: '$totalAmount' },
                claimableAmount: { $sum: '$claimableAmount' },
            },
        },
        {
            $lookup: {
                from: 'categories',
                localField: '_id',
                foreignField: '_id',
                as: 'expenseType',
            },
        },
        {
            $unwind: '$expenseType',
        },
        {
            $project: {
                _id: 0,
                expenseType: '$expenseType.name',
                totalCost: 1,
                claimableAmount: 1,
            },
        },
    ];

    if (startDate && endDate) {
        aggPipeline.unshift({
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

    if (!startDate || !endDate) {
        aggPipeline.unshift({
            $match: {
                userId,
                type: 'expense',
            },
        });
    }

    const result = Expense.aggregate(aggPipeline);

    return result;
};

module.exports = { totalCostByCategory };
