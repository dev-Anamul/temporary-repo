const createMessage = require('./create');
const findSingleMessage = require('./find-single');
const findAllMessages = require('./find-all');
const deleteMessage = require('./delete');
const featured = require('./featured');
const markAsRead = require('./mark-read');

module.exports = {
    ...createMessage,
    ...findSingleMessage,
    ...findAllMessages,
    ...deleteMessage,
    ...featured,
    ...markAsRead,
};
