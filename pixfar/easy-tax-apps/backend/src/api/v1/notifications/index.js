const notifySingle = require('./controllers/notify-single');
const notifyMultiple = require('./controllers/notify-multiple');
const notifyAll = require('./controllers/notify-all');
const findAll = require('./controllers/find-all');
const findAllForAdmin = require('./controllers/find-all-admin');
const findSingle = require('./controllers/find-single');
const update = require('./controllers/update');

module.exports = {
    ...notifySingle,
    ...notifyMultiple,
    ...notifyAll,
    ...findAll,
    ...findAllForAdmin,
    ...findSingle,
    ...update,
};
