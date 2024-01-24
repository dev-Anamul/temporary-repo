const createUser = require('./controllers/create-user');
const allUser = require('./controllers/find-all');
const findUser = require('./controllers/find-user');
const updateUser = require('./controllers/update-user');
const deleteUser = require('./controllers/delete-user');
const findAllExpenses = require('./controllers/find-all-expenses');

module.exports = {
    ...createUser,
    ...allUser,
    ...findUser,
    ...updateUser,
    ...deleteUser,
    ...findAllExpenses,
};
