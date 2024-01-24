/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (_digSum(i) % 2 === 0) count++;
  }

  return count;
};

const _digSum = (num) => {
  if (num <= 9) return num;
  let remin = num % 10;
  return remin + _digSum(Math.floor(num / 10));
};

console.log(countEven(30));
