/**
 * @description find the daily income
 * @returns {Promise<Object>}
 */

const { IncomeSource } = require('../../model');

const dailyIncome = async ({ userId, startDate, endDate }) => {
    const pipeline = [
        {
            $group: {
                _id: {
                    year: { $year: '$incomeDate' },
                    month: { $month: '$incomeDate' },
                    week: { $week: '$incomeDate' },
                    day: { $dayOfMonth: '$incomeDate' },
                },
                totalAmount: {
                    $sum: '$amount',
                },
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
                incomeDate: { $gte: startDate, $lte: endDate },
            },
        });
    }

    if (!userId) {
        pipeline.unshift({
            $match: {
                incomeDate: { $gte: startDate, $lte: endDate },
            },
        });
    }

    const incomes = await IncomeSource.aggregate(pipeline);
    return incomes;
};

// export the module
module.exports = { dailyIncome };
