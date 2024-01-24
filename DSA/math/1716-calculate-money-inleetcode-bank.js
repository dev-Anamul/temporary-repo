/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let restOfWeekDays = n % 7;
  let numOfWeek = Math.floor(n / 7);

  let totalWeekSome = 0;
  if (numOfWeek > 0)
    totalWeekSome = 28 * numOfWeek + (((numOfWeek - 1) * numOfWeek) / 2) * 7;

  let restDaySome =
    ((restOfWeekDays + numOfWeek) * (restOfWeekDays + 1 + numOfWeek)) / 2 -
    (numOfWeek * (numOfWeek + 1)) / 2;

  console.log(totalWeekSome, restDaySome, restOfWeekDays, numOfWeek);
  return totalWeekSome + restDaySome;
};

console.log(totalMoney(26));
