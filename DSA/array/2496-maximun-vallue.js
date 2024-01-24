/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let max = 0;
  for (let word of strs) {
    let posNum = Number(word);
    if (!Number.isNaN(posNum)) max = Math.max(max, posNum);
    else max = Math.max(max, word.length);
  }

  return max;
};
