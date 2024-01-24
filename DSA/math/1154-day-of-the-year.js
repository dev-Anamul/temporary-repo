/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let d = new Date(date);

  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();

  console.log(year, month, day);

  let total = 0;

  for (let i = 1; i < month + 1; i++) {
    console.log("calling");
    if (i <= 7) {
      if (i % 2 === 0) total += 30;
      else total += i * 31;
    } else {
      if (i % 2 === 0) total += 31;
      else total += i * 30;
    }
  }

  if (month + 1 > 2) {
    if (isLeapYear(year)) total -= 1;
    else total -= 2;
  }

  return total + day;
};

const isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return true;
  else return false;
};

console.log(dayOfYear("2003-03-01"));
