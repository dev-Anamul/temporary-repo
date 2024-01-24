const _default = require('../../config/default');
const { Expense } = require('../../model');

const expenseByCategory = async ({
    categoryId,
    userId,
    page = _default.page,
    limit = _default.limit,
    order = _default.order,
    sort = _default.sort,
    fields = _default.fields,
    populate,
}) => {
    const skip = (page - 1) * limit;

    const query = {
        expenseType: categoryId,
        userId,
    };

    const options = {
        skip,
        limit,
        sort: { [sort]: order === 'asc' ? 1 : -1, _id: -1 },
        select: fields?.split(',').join(' '),

        // todo: future optimization
        populate,
        // lean: true,
    };

    const expenses = await Expense.find(query, null, options);

    const totalItems = await Expense.aggregate([{ $match: query }, { $count: 'totalItems' }]);

    return {
        data: expenses,
        totalItems: totalItems[0]?.totalItems,
    };
};

module.exports = { expenseByCategory };
