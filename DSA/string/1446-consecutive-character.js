/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let i = 0;
  let j = 1;
  let max = 0;

  while (j < s.length) {
    if (s.charAt(i) !== s.charAt(j)) {
      max = Math.max(max, j - i);
      i = j;
      j++;
    } else j++;
  }

  return max;
};

console.log(maxPower("abbcccddddeeeeedcba"));
