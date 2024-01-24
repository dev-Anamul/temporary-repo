const createUpdateSettings = require('./controllers/create-update');
const findSettings = require('./controllers/find-settings');

module.exports = {
    ...createUpdateSettings,
    ...findSettings,
};
