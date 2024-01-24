const { AppError } = require('../../utils');
const { getCategoryById } = require('./get-category');

/* eslint-disable object-curly-newline */
const updateOne = async ({ id, name, description, claimablePercentage, depreciationRate }) => {
    const category = await getCategoryById(id);

    if (!category) throw new AppError('Category does not exist', 400, 'Bad Request');

    // update category
    category.name = name || category.name;
    category.description = description || category.description;
    category.claimablePercentage = claimablePercentage ?? category.claimablePercentage;
    category.depreciationRate = depreciationRate ?? category.depreciationRate;

    return category.save();
};

module.exports = { updateOne };
