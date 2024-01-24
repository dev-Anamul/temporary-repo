/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let base7 = "";
  let isPositive = true;
  if (num < 0) {
    isPositive = false;
    num = num * -1;
  }

  if (num === 0) base7 = "0" + base7;
  else {
    while (num !== 0) {
      const reminder = num % 7;
      base7 = reminder + base7;
      num = Math.floor(num / 7);
    }
  }
  if (!isPositive) base7 = "-" + base7;

  return base7;
};

console.log(convertToBase7(0));
