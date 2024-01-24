/* eslint-disable implicit-arrow-linebreak */
const _default = require('../../config/default');
const { NotificationChannel } = require('../../model');

const findAll = async ({
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
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    };

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        populate,
        // lean: true,
    };

    const expenses = await NotificationChannel.find(query, null, options);

    const totalDocuments = await NotificationChannel.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: expenses,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

// find channels by member id
const findChannelByMemberId = (memberId) =>
    NotificationChannel.find({ members: memberId }, { _id: 1 });

// export the module
module.exports = { findAll, findChannelByMemberId };
