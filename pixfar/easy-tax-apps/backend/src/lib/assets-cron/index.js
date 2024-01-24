require('./calculate-depreciation');
const depreciationJob = require('./depreciation-job');

module.exports = {
    ...depreciationJob,
};
