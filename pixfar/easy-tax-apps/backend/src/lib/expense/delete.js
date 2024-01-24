const { Types } = require('mongoose');
const { Expense } = require('../../model');
const { AppError } = require('../../utils');
const { expenseById } = require('./find-single');

const deleteOneById = async (id) => {
    const expense = await expenseById(id);

    if (!expense) throw new AppError('No expense found with this id', 404, 'Not Found');

    return expense.deleteOne();
};

const deleteByUserIdAndId = async (userId, id) => {
    const expense = await Expense.findOne({
        _id: new Types.ObjectId(id),
        userId: new Types.ObjectId(userId),
    });

    if (!expense) throw new AppError('No expense found with this id', 404, 'Not Found');

    return expense.deleteOne();
};

module.exports = { deleteOneById, deleteByUserIdAndId };
