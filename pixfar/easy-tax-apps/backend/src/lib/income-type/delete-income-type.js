const { AppError } = require('../../utils');
const findIncomeType = require('./find-income-type');

const deleteIncomeType = async (id) => {
    const incomeType = await findIncomeType(id);

    if (!incomeType) {
        throw new AppError('Income type not found', 404, 'Not Found');
    }

    await incomeType.deleteOne();
};

module.exports = deleteIncomeType;
