const { AppError } = require('../../utils');
const { getCategoryById } = require('./get-category');

const deleteOne = async (id) => {
    const category = await getCategoryById(id);

    if (!category) throw new AppError('Category does not exist', 400, 'Bad Request');

    return category.deleteOne();
};

module.exports = { deleteOne };
