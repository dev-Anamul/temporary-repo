const _default = require('../../../../config/default');
const { catchAsync } = require('../../../../utils/catchAsync');
const notificationService = require('../../../../lib/notifications');
const { generatePagination } = require('../../../../utils/pagination');
const { generateLinks } = require('../../../../utils/hateoas');

const findAll = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page, 10) || _default.page;
    const limit = parseInt(req.query.limit, 10) || _default.limit;
    const sort = req.query.sort || _default.sort;
    const order = req.query.order || _default.order;
    const search = req.query.search || _default.search;
    const fields = req.query.fields || _default.fields;
    const populate = req.query.expand || _default.populate;

    const userId = req.user._id;

    const { data, totalItems, totalUnreadItems } = await notificationService.findAll({
        page,
        limit,
        sort,
        order,
        search,
        fields,
        populate,
        userId,
    });

    // generate pagination
    const pagination = generatePagination({ page, limit, totalItems });

    // generate links
    const links = generateLinks({
        baseUrl: req.baseUrl,
        query: req.query,
        page,
        totalPages: pagination?.totalPages,
    });

    // generate response
    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expenses',
        data,
        totalUnreadItems,
        links,
        pagination,
    };

    // send response
    res.status(200).json(response);
});

module.exports = { findAll };
