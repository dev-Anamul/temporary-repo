/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let digArr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < digArr.length; i++) {
    if (i % 2 === 0) sum += +digArr[i];
    else sum -= +digArr[i];
  }

  return sum;
};

console.log(alternateDigitSum(886996));