const _default = require('../../config/default');
const { Notification } = require('../../model');
const { findChannelByMemberId } = require('../notification-channel');

// find all unread notification for specific user
const findAllUnreadNotification = async ({ userId, channelIds }) => {
    const query = {
        $and: [
            {
                $or: [
                    { user: userId },
                    { notificationType: 'all' },
                    { channelId: { $in: channelIds } },
                ],
            },
            {
                read: false,
            },
        ],
    };

    const options = {
        sort: { createdAt: -1 },
    };

    return Notification.find(query, null, options).count();
};
/// find all unread notification for admin
const findAllUnreadNotificationForAdmin = async () => {
    const aggregate = [
        {
            $match: {
                read: false,
            },
        },
        {
            $group: {
                _id: null,
                count: { $sum: 1 },
            },
        },
    ];

    const result = await Notification.aggregate(aggregate);

    return result[0]?.count || 0;
};

// find all notification for specific user
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

    // channel id based on user id
    const channels = await findChannelByMemberId(userId);
    const channelIds = channels.map((channel) => channel._id);

    const query = {
        $and: [
            {
                $or: [
                    { user: userId },
                    { channelId: { $in: channelIds } },
                    { notificationType: 'all' },
                ],
            },
            {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { body: { $regex: search, $options: 'i' } },
                ],
            },
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

    const expenses = await Notification.find(query, null, options);

    const totalUnread = await findAllUnreadNotification({ userId, channelIds });

    const totalDocuments = await Notification.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: expenses,
        totalItems: totalDocuments[0]?.totalDocuments,
        totalUnreadItems: totalUnread,
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
            { body: { $regex: search, $options: 'i' } },
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

    const expenses = await Notification.find(query, null, options);

    const totalDocuments = await Notification.aggregate([
        { $match: query },
        { $count: 'totalDocuments' },
    ]);

    return {
        data: expenses,
        totalItems: totalDocuments[0]?.totalDocuments,
    };
};

// export
module.exports = {
    findAll,
    findAllForAdmin,
    findAllUnreadNotification,
    findAllUnreadNotificationForAdmin,
};
