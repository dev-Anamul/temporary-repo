/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0;
  let count = 0;

  for (let num of nums) {
    if (num % 2 === 0 && num % 3 === 0) {
      sum += num;
      count++;
    }
  }

  if (count) return Math.floor(sum / count);
  else return 0;
};

console.log(averageValue([1, 3, 6, 10, 12, 15]));
