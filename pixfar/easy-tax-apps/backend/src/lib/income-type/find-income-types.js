const _default = require('../../config/default');
const { IncomeType } = require('../../model');

const findIncomeTypes = async ({
    page = _default.page,
    limit = _default.limit,
    sort = _default.sort,
    order = _default.order,
    search = _default.search,
    fields = _default.fields,
    populate = _default.populate,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    };

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        populate,
    };

    const categories = await IncomeType.find(query, null, options);

    const totalDocuments = await IncomeType.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: categories,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

module.exports = findIncomeTypes;
