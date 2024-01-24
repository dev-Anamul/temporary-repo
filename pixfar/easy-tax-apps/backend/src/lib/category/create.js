const { Category } = require('../../model');

// eslint-disable-next-line object-curly-newline
const createCategory = async ({ name, description, claimablePercentage, depreciationRate }) => {
    // Create category
    const newCategory = new Category({
        name,
        description,
        claimablePercentage,
        depreciationRate,
    });

    return newCategory.save();
};

module.exports = { createCategory };
