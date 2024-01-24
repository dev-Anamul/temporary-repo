const cron = require('node-cron');
const { calculateDepreciation } = require('./depreciation-job');

cron.schedule('0 0 31 3 *', calculateDepreciation);
