/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let box = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    let digSum = _digSum(i);
    box[digSum] = box[digSum] ? box[digSum] + 1 : 1;
  }

  return Math.max(...Object.values(box));
};

/**
 *
 * @param {number} num
 */
const _digSum = (num) => {
  if (num === 0) return num;
  let mod = num % 10;
  return mod + _digSum(Math.floor(num / 10));
};

console.log(countBalls(5, 15));
