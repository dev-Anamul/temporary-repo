const createCategory = require('./controllers/create');
const findAll = require('./controllers/find-all');
const findOne = require('./controllers/find-single');
const update = require('./controllers/update');
const remove = require('./controllers/remove');
const expenseByCategory = require('./controllers/expense-by-category');

module.exports = {
    ...createCategory,
    ...findAll,
    ...findOne,
    ...update,
    ...remove,
    ...expenseByCategory,
};
