/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let count = 0;
  let inner = strs[0].length;

  for (let i = 0; i < inner; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] > strs[j][i]) {
        count++;
        break;
      }
    }
  }

  return count;
};

console.log(minDeletionSize(["rrjk", "furt", "guzm"]));
