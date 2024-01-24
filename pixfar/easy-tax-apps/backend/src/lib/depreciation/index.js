const addDepreciation = require('./add-depreciation');
const updateDepreciation = require('./update-depreciation');
const deleteDepreciation = require('./delete-depreciation');
const findDepreciation = require('./find-depreciation');

module.exports = {
    addDepreciation,
    updateDepreciation,
    deleteDepreciation,
    ...findDepreciation,
};
