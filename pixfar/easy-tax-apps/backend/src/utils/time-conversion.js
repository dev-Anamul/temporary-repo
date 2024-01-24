const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

// Set default time zone to Bangladesh Standard Time
dayjs.tz.setDefault('Pacific/Auckland');

const generateDateTime = (dateTime) => dayjs(dateTime).format();

const generateDate = (dateTime) => dayjs(dateTime).format('YYYY-MM-DD');

module.exports = {
    generateDateTime,
    generateDate,
};
