const { IncomeSource } = require('../../model');

const monthlyIncome = async ({ userId, startDate, endDate }) => {
    // aggregate pipeline
    const pipeline = [
        {
            $sort: {
                incomeDate: 1,
                _id: -1,
            },
        },
        {
            $group: {
                _id: {
                    year: { $year: '$incomeDate' },
                    month: { $month: '$incomeDate' },
                },
                totalAmount: { $sum: '$amount' },
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
                incomeDate: {
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
                incomeDate: {
                    $gte: startDate,
                    $lte: endDate,
                },
            },
        });
    }

    // get the incomes
    const incomes = await IncomeSource.aggregate(pipeline);

    return incomes;
};

// export the module
module.exports = { monthlyIncome };
