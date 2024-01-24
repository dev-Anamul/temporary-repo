const { Expense, User, IncomeSource } = require('../../model');

const findTotalExpense = async ({ userId } = {}) => {
    const query = {
        userId,
        type: 'expense',
    };

    const pipeline = [
        { $match: query },
        {
            $group: {
                _id: null,
                totalAmount: { $sum: '$totalAmount' },
                totalClaimableAmount: { $sum: '$claimableAmount' },
            },
        },
    ];

    if (!userId) {
        pipeline.shift();
    }

    const totalExpense = await Expense.aggregate(pipeline);

    return totalExpense[0] || { totalAmount: 0, totalClaimableAmount: 0 };
};

/**
 * @description Count the total users
 * @param {Object} query
 * @returns {Promise<Number>}
 */

const numberOfUsers = async () => {
    const pipeline = [
        {
            $group: {
                _id: null,
                count: { $sum: 1 },
            },
        },
    ];

    const users = await User.aggregate(pipeline);

    return users[0].count || 0;
};

/**
 * @description Count the total users by status
 * @returns {Promise<Object>}
 */

const numberOfUsersByStatus = async () => {
    const pipeline = [
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 },
            },
        },
    ];

    const users = await User.aggregate(pipeline);

    return users.reduce((acc, cur) => {
        acc[cur._id] = cur.count;
        return acc;
    }, {});
};

/**
 * @description find the total expense by status
 * @returns {Promise<Object>}
 */

const numberOfExpenseByStatus = async () => {
    const pipeline = [
        {
            $group: {
                _id: '$status',
                totalExpenseAmount: { $sum: '$totalAmount' },
                totalClaimableAmount: { $sum: '$claimableAmount' },
            },
        },
    ];

    const expenses = await Expense.aggregate(pipeline);

    return expenses.reduce((acc, cur) => {
        acc[cur._id] = {
            totalExpenseAmount: cur.totalExpenseAmount,
            totalClaimableAmount: cur.totalClaimableAmount,
        };
        return acc;
    }, {});
};

/**
 * @description find the total Income
 * @returns {Promise<Object>}
 */

const totalIncome = async () => {
    const pipeline = [
        {
            $group: {
                _id: null,
                totalIncome: { $sum: '$amount' },
            },
        },
    ];

    const expenses = await IncomeSource.aggregate(pipeline);

    return expenses[0]?.totalIncome || 0;
};

// total income by category
const totalIncomeByCategory = async ({ userId }) => {
    const pipeline = [
        {
            $match: {
                userId,
            },
        },
        {
            $group: {
                _id: '$incomeType',
                totalIncome: { $sum: '$amount' },
            },
        },
    ];

    const expenses = await IncomeSource.aggregate(pipeline);

    return expenses.reduce((acc, cur) => {
        acc[cur._id] = cur.totalIncome;
        return acc;
    }, {});
};

// export the module
module.exports = {
    findTotalExpense,
    numberOfUsers,
    numberOfUsersByStatus,
    numberOfExpenseByStatus,
    totalIncome,
    totalIncomeByCategory,
};
