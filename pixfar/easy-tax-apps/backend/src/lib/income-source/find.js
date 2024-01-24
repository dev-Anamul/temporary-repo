const { IncomeSource } = require('../../model');

const findIncomeSourceById = async (id) => {
    const incomeSource = await IncomeSource.findById(id);
    return incomeSource;
};

// find income by id and user id
const findIncomeSourceByIdAndUserId = async (id, userId) => {
    const incomeSource = await IncomeSource.findOne({ _id: id, userId });
    return incomeSource;
};

module.exports = { findIncomeSourceById, findIncomeSourceByIdAndUserId };
