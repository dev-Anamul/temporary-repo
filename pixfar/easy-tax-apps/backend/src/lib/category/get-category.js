const { Category } = require('../../model');

const getCategoryById = async (id) => {
    const category = await Category.findById(id);
    return category;
};

module.exports = { getCategoryById };
