const createMsg = require('./controllers/create');
const findSingleMsg = require('./controllers/find-single');
const findAllMsg = require('./controllers/find-all');
const deleteMsg = require('./controllers/delete');
const reply = require('./controllers/reply');
const featured = require('./controllers/featured');
const markAsRead = require('./controllers/mark-as-read');

module.exports = {
    ...createMsg,
    ...findSingleMsg,
    ...findAllMsg,
    ...deleteMsg,
    ...reply,
    ...featured,
    ...markAsRead,
};
