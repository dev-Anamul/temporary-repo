function dayToName(day) {
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const index = day % 7;
    return daysOfWeek[index];
}

// get the weekday name
function getWeekdayName(year, month, day) {
    // Month value in JavaScript is 0-based (0 represents January, 11 represents December)
    const date = new Date(year, month - 1, day);

    // Specify the locale (you can change this based on your needs)
    const locale = 'en-US';

    // Options for formatting the date
    const options = { weekday: 'long' };

    // Format the date to get the weekday name
    const weekdayName = new Intl.DateTimeFormat(locale, options).format(date);

    return weekdayName;
}

// export the module
module.exports = { dayToName, getWeekdayName };
