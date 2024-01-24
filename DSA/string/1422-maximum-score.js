/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  let j = 1;
  while (j < s.length) {
    max = Math.max(
      max,
      countZero(s.substring(0, j)) + countOne(s.substring(j))
    );
    j++;
  }

  return max;
};

/**
 *
 * @param {string} str
 */
const countZero = (str) => {
  let count = 0;
  for (let ltr of str) {
    if (ltr === "0") count++;
  }

  return count;
};
/**
 *
 * @param {string} str
 */
const countOne = (str) => {
  let count = 0;
  for (let ltr of str) {
    if (ltr === "1") count++;
  }

  return count;
};

console.log(maxScore("011101"));
