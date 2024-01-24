const getLastDateOfMonth = (month) => {
    const daysInMonth = [
        31, // January
        28, // February
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31, // December
    ];

    // Check for leap year (February has 29 days)
    // const isLeapYear = new Date().getFullYear() % 4 === 0;
    // if (isLeapYear && month === 1) {
    //     return 29;
    // }

    return daysInMonth[month];
};

module.exports = { getLastDateOfMonth };
