/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let count = 0;
    for (let j = 0; j < strs[i].length; j++) {
      if (result[j] === strs[i][j]) count++;
      else break;
    }
    result = result.substring(0, count);
  }

  return result;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
