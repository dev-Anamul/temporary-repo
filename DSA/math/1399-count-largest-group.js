/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let obj = [];

  for (let i = 1; i <= n; i++) {
    let digSum = _digSum(i);
    if (i > 9) obj.push([digSum, i]);
    else obj.push([i]);
  }

  console.log(obj);
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

console.log(countLargestGroup(24));
