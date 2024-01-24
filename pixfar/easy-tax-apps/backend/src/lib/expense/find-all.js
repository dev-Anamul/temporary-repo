/* eslint-disable no-nested-ternary */
const _default = require('../../config/default');
const { Expense } = require('../../model');
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
            { expenseName: { $regex: search, $options: 'i' } },
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

    const expenses = await Expense.find(query, null, options);

    const totalDocuments = await Expense.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: expenses,
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
    status = '',
    isGSTClaimable = '',
    expenseType = '',
    startDate,
    endDate,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        $or: [
            { expenseName: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    };

    if (status) {
        query.status = status;
    }

    if (isGSTClaimable?.toLowerCase() === 'true' || isGSTClaimable?.toLowerCase() === 'false') {
        query.isGSTClaimable = JSON.parse(isGSTClaimable);
    }

    if (expenseType) {
        query.expenseType = expenseType;
    }

    if (startDate && endDate) {
        query.expenseDate = { $gte: startDate, $lte: endDate };
    }

    // make populate array
    // if (populate) {
    //     populate.split(',').forEach((field) => {
    //         query[field] = 1;
    //     });
    // }

    let populateArray = [];
    if (populate) {
        populateArray = populate.split(',').map((field) => ({
            path: field,
            select:
                field === 'userId'
                    ? ['firstName', 'middleName', 'lastName', 'status', 'role', 'email']
                    : field === 'expenseType'
                    ? ['name', 'type', 'description']
                    : ['-__v', '-createdAt', 'updatedAt'],
        }));
    }

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1, _id: -1 },
        select: fields?.split(',').join(' '),
        populate: populateArray,
        // lean: true,
    };

    const expenses = await Expense.find(query, null, options);

    const totalDocuments = await Expense.aggregate([
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
