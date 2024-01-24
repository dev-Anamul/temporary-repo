/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0;
  let right = c;

  while (left <= right) {
    let multiple = left * left + right * right;
    if (multiple === c) return true;
    else if (multiple > c) right--;
    else left++;
  }

  return false;
};

console.log(judgeSquareSum(8));
