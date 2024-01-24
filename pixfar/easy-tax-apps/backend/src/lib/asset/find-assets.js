const _default = require('../../config/default');
const { Asset } = require('../../model');

const findAll = async ({
    page = _default.page,
    limit = _default.limit,
    sort = _default.sort,
    order = _default.order,
    search = _default.search,
    fields = _default.fields,
    populate = _default.populate,
    userId,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        userId,
        $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    };

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1, _id: -1 },
        select: fields?.split(',').join(' '),
        populate,
        // lean: true,
    };

    const expenses = await Asset.find(query, null, options);

    const totalDocuments = await Asset.aggregate([{ $match: query }, { $count: 'totalDocuments' }]);

    return {
        data: expenses,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

module.exports = findAll;
