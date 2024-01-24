const dayjs = require('dayjs');
const { AppError } = require('./AppError');

function timeAfterMinutes({ time = 30 }) {
    if (typeof time !== 'number') throw new AppError('Invalid time value', 400, 'Bad Request');

    const currentTime = dayjs().toDate();
    const timeIn30Minutes = dayjs(currentTime).add(time, 'minute').toDate();

    return timeIn30Minutes;
}

module.exports = {
    timeAfterMinutes,
};
