/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(year, month - 1, day);
  let dayInd = date.getDay();
  console.log(date, dayInd);

  return weekDays[dayInd];
};

console.log(dayOfTheWeek(31, 8, 2019));
