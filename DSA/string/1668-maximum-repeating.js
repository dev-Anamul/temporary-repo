/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  return countWord(sequence, word);
};

/**
 *
 * @param {string} sen
 * @param {string} w
 * @param {number} count
 */
const countWord = (sen, w) => {
  let revW = w.split("").reverse().join("");

  if (sen.indexOf(revW) === -1) return 0;

  let ind = sen.lastIndexOf(revW);
  let reminStr = sen.substring(0, ind - w.length + 1);
  return countWord(reminStr, w) + 1;
};

console.log(maxRepeating("ababc", "ab"));
