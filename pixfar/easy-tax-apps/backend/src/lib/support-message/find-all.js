const _default = require('../../config/default');
const { SupportMessage } = require('../../model');

const findAllForAdmin = async ({
    page = _default.page,
    limit = _default.limit,
    sort = _default.sort,
    order = _default.order,
    search = _default.search,
    fields = _default.fields,
    populate = _default.populate,
    type = _default.type,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        type,
        $or: [
            { subject: { $regex: search, $options: 'i' } },
            { message: { $regex: search, $options: 'i' } },
        ],
    };

    if (type === 'featured') {
        query.isFeatured = true;

        delete query.type;
    }

    const populateArray = [];
    if (populate) {
        populateArray.push({
            path: 'userId',
            select: 'fullName email',
        });
    }

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        populate: populateArray,
        // lean: true,
    };

    const expenses = await SupportMessage.find(query, null, options).populate('replies');

    const totalDocuments = await SupportMessage.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: expenses,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

module.exports = { findAllForAdmin };
