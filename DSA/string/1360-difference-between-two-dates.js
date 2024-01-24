/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  let firstDate = new Date(date1).getTime();
  let secondDate = new Date(date2).getTime();

  let dif = Math.abs(firstDate - secondDate);

  return dif / (24 * 60 * 60 * 1000);
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"));
