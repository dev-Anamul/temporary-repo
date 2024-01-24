const mongoose = require('mongoose');
const { Expense } = require('../../model');
const { generateFiscalRange } = require('../../utils');

const fiscalYearExpense = async ({ userId, numOfYear = 10 }) => {
    const ranges = await generateFiscalRange(numOfYear);

    const id = new mongoose.Types.ObjectId(userId);

    const aggregates = ranges.map((range) => {
        const agg = [
            {
                $match: {
                    userId: id,
                    type: 'expense',
                    expenseDate: {
                        $gte: range.start,
                        $lt: range.end,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    fiscal_year: { $first: range?.fiscal_year },
                    totalExpenses: { $sum: '$claimableAmount' },
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 0,
                    totalExpenses: 1,
                    count: 1,
                    fiscal_year: 1,
                },
            },
        ];

        return Expense.aggregate(agg);
    });

    const results = await Promise.all(aggregates);

    return results.map((result) => result[0]);
};

module.exports = { fiscalYearExpense };
