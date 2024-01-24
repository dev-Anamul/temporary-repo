/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const resultArr = [];
  let carryBit = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let s = digits[i] + carryBit;
    if (s >= 10) {
      resultArr.unshift(+s.toString()[1]);
      carryBit = +s.toString()[0];
    } else {
      resultArr.unshift(s);
      carryBit = 0;
    }
  }

  if (carryBit) resultArr.unshift(carryBit);
  return resultArr;
};

console.log(plusOne([9]));
