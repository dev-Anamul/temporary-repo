const { generateGstClaimableAmount } = require('../../../utils');

/* eslint-disable implicit-arrow-linebreak */
const addClaimableAmountAndUserId = (userId, expenses = []) =>
    expenses.map((expense) => {
        const gstClaimableAmount = generateGstClaimableAmount({
            amount: expense.totalAmount,
            isGSTClaimable: JSON.parse(expense.isGSTClaimable),
        });
        const subTotal = expense.totalAmount - gstClaimableAmount;
        const claimableAmount = (subTotal * expense.claimablePercentage).toFixed(2);

        return {
            ...expense,
            claimableAmount,
            totalAmount: subTotal,
            gstAmount: gstClaimableAmount,
            userId,
            status: expense?.status || 'pending for slip',
        };
    });

module.exports = { addClaimableAmountAndUserId };
