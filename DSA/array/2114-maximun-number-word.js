/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxWord = 0;
  for (let sentence of sentences) {
    let word = sentence.split(" ").length;
    maxWord = Math.max(maxWord, word);
  }
  return maxWord;
};

console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
