const createDepreciation = require('./controllers/create');
const findDepreciation = require('./controllers/find');

module.exports = {
    ...createDepreciation,
    ...findDepreciation,
};
