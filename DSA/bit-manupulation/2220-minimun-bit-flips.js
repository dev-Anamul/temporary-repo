/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    let gSet = (goal >> i) & 1;
    let stSet = (start >> i) & 1;
    if (gSet !== stSet) count++;
  }

  return count;
};

console.log(minBitFlips(3, 4));
