/* eslint-disable no-nested-ternary */
const _default = require('../../config/default');
const { OCRExpense } = require('../../model');
// this
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

    const OCRExpenses = await OCRExpense.find(query, null, options);

    const totalDocuments = await OCRExpense.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: OCRExpenses,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

// find all for admin
const findAllForAdmin = async ({
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

    let populateArray = [];
    if (populate) {
        populateArray = populate.split(',').map((field) => ({
            path: field,
            select:
                field === 'userId'
                    ? ['firstName', 'middleName', 'lastName', 'status', 'role', 'email']
                    : field === 'expenseType'
                    ? ['type', 'name', 'description']
                    : ['-__v', '-createdAt', 'updatedAt'],
        }));
    }

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1 },
        select: fields?.split(',').join(' '),
        populate: populateArray,
        // lean: true,
    };

    const expenses = await OCRExpense.find(query, null, options);

    const totalDocuments = await OCRExpense.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: expenses,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

// export all
module.exports = { findAll, findAllForAdmin };
