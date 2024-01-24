/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let senOne = word1.join("");
  let senTwo = word2.join("");

  return senOne === senTwo;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
