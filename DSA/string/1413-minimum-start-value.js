/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  const cumulative = [];
  for (let num of nums) {
    let last = cumulative[cumulative.length - 1] || 0;
    cumulative.push(last + num);
  }

  let min = Math.min(...cumulative);
  if (min < 0) return min * -1 + 1;
  else return 1;
};

console.log(minStartValue([1,-2,-3]));
