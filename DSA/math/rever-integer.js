/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isPositive = true;
  if (x < 0) {
    isPositive = false;
    // x = +x.toString().replace(/^-+/, "");
    x = x * -1;
  }

  let reverseNum = 0;
  let reminder;
  while (x !== 0) {
    reminder = x % 10;
    reverseNum = reverseNum * 10 + reminder;
    x = Math.floor(x / 10);
  }

  if ((reverseNum | 0) !== reverseNum) {
    return 0;
  } else if (isPositive) return reverseNum;
  else return reverseNum * -1;
};

console.log(reverse(1534236469));
