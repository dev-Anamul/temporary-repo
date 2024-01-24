/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0;

  for (let i = 2; i < s.length; i++) {
    if (
      s.charAt(i - 2) !== s.charAt(i - 1) &&
      s.charAt(i - 2) !== s.charAt(i) &&
      s.charAt(i - 1) !== s.charAt(i)
    )
      count++;
  }

  return count;
};

console.log(countGoodSubstrings("aababcabc"));
