/* eslint-disable object-curly-newline */
const { catchAsync, generatePagination, generateLinks } = require('../../../../utils');
const expenseService = require('../../../../lib/expense');

const expenseByCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { page, limit, order, sort, fields, populate } = req.query;

    const { data: expenses, totalItems } = await expenseService.expenseByCategory({
        categoryId: id,
        userId: req.user._id,
        page,
        limit,
        order,
        sort,
        fields,
        populate,
    });

    const pagination = generatePagination({ limit, page, totalItems });

    const links = generateLinks({
        baseUrl: req.baseUrl,
        query: req.query,
        page,
        totalPages: pagination?.totalPages,
    });

    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expenses',
        data: expenses,
        links,
        pagination,
    };

    res.status(200).json(response);
});

module.exports = { expenseByCategory };
