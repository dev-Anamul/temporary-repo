const { IncomeSource } = require('../../model');

const create = async ({
    incomeSource,
    amount,
    description,
    startDate,
    endDate,
    incomeType,
    incomeDate,
    userId,
    status,
}) => {
    const newIncomeSource = new IncomeSource({
        incomeSource,
        amount,
        description,
        startDate,
        endDate,
        incomeType,
        userId,
        incomeDate,
        status,
    });

    return newIncomeSource.save();
};

module.exports = { create };
