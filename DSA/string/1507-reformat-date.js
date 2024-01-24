/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateArr = date.split(" ");
  let day = Number.parseInt(dateArr[0]);
  let mon = months.indexOf(dateArr[1]);

  return (
    dateArr[2] +
    "-" +
    (mon + 1 < 10 ? "0" + (mon + 1) : mon + 1) +
    "-" +
    (day < 10 ? "0" + day : day)
  );
};

console.log(reformatDate("6th Jun 1933"));
