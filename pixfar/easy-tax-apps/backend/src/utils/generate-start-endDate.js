const dayjs = require('dayjs');

const generateStartEndDate = ({ numOfDays = 7 }) => {
    const endDate = dayjs().toDate();
    const startDate = dayjs(endDate).subtract(numOfDays, 'day').toDate();

    return {
        startDate,
        endDate,
    };
};

const generateStartEndMonth = ({ numOfMonths = 12 }) => {
    const endMonth = dayjs().toDate();
    const startMonth = dayjs(endMonth).subtract(numOfMonths, 'month').toDate();
    return {
        startMonth,
        endMonth,
    };
};

module.exports = {
    generateStartEndDate,
    generateStartEndMonth,
};
