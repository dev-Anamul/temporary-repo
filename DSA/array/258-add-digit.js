/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return _helper(num);
};

const _helper = (num) => {
  if (num.toString().length === 1) return num;

  let numArr = num.toString().split("");
  let sum = eval(numArr.join("+"));
  return _helper(sum);
};

console.log(addDigits(38));
