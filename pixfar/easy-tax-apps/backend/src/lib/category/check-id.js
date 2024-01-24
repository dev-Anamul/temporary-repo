const { Category } = require('../../model');

const bulkIdCheck = async (ids) => {
    const categories = await Category.find(
        { _id: { $in: ids } },
        '_id claimablePercentage depreciationRate'
    );

    const foundIds = categories.map((doc) => doc.id);

    const missingIds = ids.filter((id) => !foundIds.includes(id));

    return { missingIds, categories };
};

module.exports = { bulkIdCheck };
