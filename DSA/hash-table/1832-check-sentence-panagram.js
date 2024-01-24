/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  for (let i = 97; i <= 122; i++) {
    if (!sentence.includes(String.fromCharCode(i))) return false;
  }

  return true;
};

console.log(checkIfPangram("leetcode"));
