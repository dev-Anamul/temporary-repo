const _default = require('../../config/default');
const { IncomeSource } = require('../../model');

const findAll = async ({
    page = _default.page,
    limit = _default.limit,
    sort = _default.sort,
    order = _default.order,
    search = _default.search,
    fields = _default.fields,
    userId,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        userId,
        $or: [
            { incomeSource: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    };

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        // lean: true,
    };

    const incomeSources = await IncomeSource.find(query, null, options);

    const totalDocuments = await IncomeSource.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: incomeSources,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

const findAllForAdmin = async ({
    page = _default.page,
    limit = _default.limit,
    sort = _default.sort,
    order = _default.order,
    search = _default.search,
    fields = _default.fields,
    incomeSource = '',
    incomeType,
    startDate,
    endDate,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        $or: [
            { incomeSource: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    };

    if (incomeSource) {
        query.incomeSource = incomeSource;
    }

    if (incomeType) {
        query.incomeType = incomeType;
    }

    if (startDate && endDate) {
        query.incomeDate = { $gte: startDate, $lte: endDate };
    }

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        populate: [
            {
                path: 'userId',
                select: 'fullName email',
            },
        ],
        // lean: true,
    };

    const incomeSources = await IncomeSource.find(query, null, options);

    const totalDocuments = await IncomeSource.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: incomeSources,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

module.exports = { findAll, findAllForAdmin };
