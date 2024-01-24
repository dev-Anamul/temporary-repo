/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let max = 0;
  let start = 0;

  for (let ltr of s) {
    if (ltr === "(") start++;
    if (ltr === ")") {
      max = Math.max(max, start);
      start--;
    }
  }

  return max;
};

console.log(maxDepth("(1)+((2))+(((3)))"));
