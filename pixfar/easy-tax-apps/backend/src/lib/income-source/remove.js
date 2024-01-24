const { IncomeSource } = require('../../model');
const { AppError } = require('../../utils');

const removeOne = async ({ id, userId }) => {
    const incomeSource = await IncomeSource.findOne({ _id: id, userId });

    if (!incomeSource) throw new AppError('Income source does not exist', 400, 'Bad Request');

    return incomeSource.deleteOne();
};

module.exports = { removeOne };
