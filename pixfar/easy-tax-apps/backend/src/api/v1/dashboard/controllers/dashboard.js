const { catchAsync } = require('../../../../utils');
const dashService = require('../../../../lib/dashboard');

const dashboardData = catchAsync(async (req, res) => {
    const userId = req.user._id;

    const topExpenseItem = await dashService.findTopExpense({ userId });

    const totalExpense = await dashService.findTotalExpense({ userId });

    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved dashboard data',
        data: {
            topExpense: topExpenseItem || {},
            ...(totalExpense || {}),
            _id: undefined,
        },
    };

    res.status(200).json(response);
});

/**
 * @description Get all admin dashboard data
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise}
 */

const adminDashboardData = catchAsync(async (req, res) => {
    const allUsers = await dashService.numberOfUsers();
    const userByStatus = await dashService.numberOfUsersByStatus();
    const totalExpense = await dashService.findTotalExpense();
    const expenseByStatus = await dashService.numberOfExpenseByStatus();
    const totalIncome = await dashService.totalIncome();

    const data = {
        totalUsers: allUsers,
        usersByStatus: userByStatus,
        totalExpense,
        expenseByStatus,
        totalIncome,
    };

    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved dashboard data',
        data,
    };

    return res.status(200).json(response);
});

module.exports = { dashboardData, adminDashboardData };
