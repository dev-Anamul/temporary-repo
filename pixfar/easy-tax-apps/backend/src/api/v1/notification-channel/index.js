const create = require('./controllers/create');
const findSingle = require('./controllers/find-single');
const update = require('./controllers/update');
const remove = require('./controllers/delete');
const findAll = require('./controllers/find-all');
const notifyChannelUsers = require('./controllers/notify-users');
const findChannelMembers = require('./controllers/find-members');
const addMembers = require('./controllers/add-members');
const removeMember = require('./controllers/remove-member');

module.exports = {
    ...create,
    ...findSingle,
    ...update,
    ...remove,
    ...findAll,
    ...notifyChannelUsers,
    ...findChannelMembers,
    ...addMembers,
    ...removeMember,
};
