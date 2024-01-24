const dayjs = require('dayjs');
const { Expense } = require('../../model');

const expenseSummery = async ({
    startDate = dayjs().toDate(),
    endDate = dayjs().toDate(),
    userId,
}) => {
    // aggregate pipeline
    const pipeline = [
        {
            $match: {
                userId,
                expenseDate: {
                    $gte: startDate,
                    $lte: endDate,
                },
            },
        },
        {
            $sort: {
                expenseDate: 1,
            },
        },

        {
            $group: {
                _id: {
                    year: { $year: '$expenseDate' },
                    month: { $month: '$expenseDate' },
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
        // {
        //     $lookup: {
        //         from: 'users',
        //         localField: 'userId',
        //         foreignField: '_id',
        //         as: 'user',
        //     },
        // },
        // {
        //     $unwind: '$user',
        // },
        {
            $sort: {
                '_id.year': 1,
                '_id.month': 1,
            },
        },
        {
            $project: {
                _id: 0,
                totalAmount: 1,
                claimableAmount: 1,
                count: 1,
                month: '$_id.month',
                year: '$_id.year',
                type: '$expenseType._id',
                typeName: '$expenseType.name',
                userId: '$user._id',
                userName: '$user.fullName',
            },
        },
    ];

    // get the expenses
    const expenses = await Expense.aggregate(pipeline);

    return expenses;
};

module.exports = { expenseSummery };
