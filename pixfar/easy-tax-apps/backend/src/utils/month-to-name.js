function monthToName(monthNumber) {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    if (monthNumber < 0) {
        return null;
    }

    const index = monthNumber % 12;

    return monthNames[index];
}

module.exports = { monthToName };
