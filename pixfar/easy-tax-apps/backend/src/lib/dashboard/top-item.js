const { Expense } = require('../../model');

const findTopExpense = ({ userId }) => {
    const query = {
        userId,
        type: 'expense',
    };
    const options = {
        sort: { totalAmount: -1 },
        limit: 1,
    };

    return Expense.findOne(query, null, options);
};

// export the module
module.exports = { findTopExpense };
