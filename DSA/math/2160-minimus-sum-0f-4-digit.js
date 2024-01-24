/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let digArr = _digArr(num, []);
  digArr.sort((a, b) => a - b);

  return digArr[0] * 10 + digArr[2] + (digArr[1] * 10 + digArr[3]);
};

const _digArr = function (num, arr) {
  if (num <= 9) {
    arr.push(num);
    return arr;
  }
  let dig = num % 10;
  arr.push(dig);
  return _digArr(Math.floor(num / 10), arr);
};

console.log(minimumSum(4009));
