/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let suffleStr = [];
  for (let i = 0; i < s.length; i++) {
    suffleStr[indices[i]] = s[i];
  }

  return suffleStr.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
