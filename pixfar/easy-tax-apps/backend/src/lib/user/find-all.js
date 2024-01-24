const _default = require('../../config/default');
const { User } = require('../../model');

const findAll = async ({
    page = _default.page,
    limit = _default.limit,
    sort = _default.sort,
    order = _default.order,
    search = _default.search,
    fields = _default.fields,
    status = '',
}) => {
    const skip = (page - 1) * limit;

    const query = {
        $or: [
            { firstName: { $regex: search, $options: 'i' } },
            { middleName: { $regex: search, $options: 'i' } },
            { lastName: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
        ],
    };

    if (status) {
        query.status = status;
    }

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        // lean: true,
    };

    const users = await User.find(query, null, options);

    const totalDocuments = await User.aggregate([{ $match: query }, { $count: 'totalDocuments' }]);

    return {
        data: users,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

module.exports = { findAll };
