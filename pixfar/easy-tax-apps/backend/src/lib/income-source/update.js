const { AppError } = require('../../utils');
const { findIncomeSourceById } = require('./find');

const update = async ({
    id,
    incomeSource,
    incomeType,
    description,
    amount,
    startDate,
    endDate,
    status,
}) => {
    const existIncomeSource = await findIncomeSourceById(id);

    if (!incomeSource) throw new AppError('Income Source does not exist', 400, 'Bad Request');

    existIncomeSource.incomeSource = incomeSource || existIncomeSource.incomeSource;
    existIncomeSource.incomeType = incomeType || existIncomeSource.incomeType;
    existIncomeSource.description = description || existIncomeSource.description;
    existIncomeSource.amount = amount || existIncomeSource.amount;
    existIncomeSource.startDate = startDate || existIncomeSource.startDate;
    existIncomeSource.endDate = endDate || existIncomeSource.endDate;
    existIncomeSource.status = status || existIncomeSource.status;

    // save the income source
    return existIncomeSource.save();
};

module.exports = { update };
