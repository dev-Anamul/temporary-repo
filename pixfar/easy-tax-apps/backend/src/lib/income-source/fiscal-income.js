const mongoose = require('mongoose');
const { IncomeSource } = require('../../model');
const { generateFiscalRange } = require('../../utils');

const fiscalYearIncome = async ({ userId, numOfYear = 10 }) => {
    const ranges = await generateFiscalRange(numOfYear);

    const id = new mongoose.Types.ObjectId(userId);

    const aggregates = ranges.map((range) => {
        const agg = [
            {
                $match: {
                    userId: id,
                    incomeDate: {
                        $gte: range.start,
                        $lt: range.end,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    fiscal_year: { $first: range.fiscal_year },
                    totalIncome: { $sum: '$amount' },
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 0,
                    totalIncome: 1,
                    count: 1,
                    fiscal_year: 1,
                },
            },
        ];

        return IncomeSource.aggregate(agg);
    });

    const results = await Promise.all(aggregates);

    return results.map((result) => result[0]);
};

module.exports = { fiscalYearIncome };
