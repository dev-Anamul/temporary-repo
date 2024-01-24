const { AppError } = require('../../utils');
const findIncomeType = require('./find-income-type');

const updateIncomeType = async ({ id, name, description }) => {
    const incomeType = await findIncomeType(id);

    if (!incomeType) {
        throw new AppError('Income type not found', 404, 'Not Found');
    }

    incomeType.name = name ?? incomeType.name;
    incomeType.description = description ?? incomeType.description;

    await incomeType.save();

    return incomeType;
};

module.exports = updateIncomeType;
