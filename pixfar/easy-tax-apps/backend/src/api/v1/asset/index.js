const addAsset = require('./controllers/add');
const updateAsset = require('./controllers/update');
const deleteAsset = require('./controllers/delete');
const findAsset = require('./controllers/find');
const findAssets = require('./controllers/find');

module.exports = {
    ...addAsset,
    ...updateAsset,
    ...deleteAsset,
    ...findAsset,
    ...findAssets,
};
