/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let words = text.split(" ");
  let ans = [];
  for (let i = 1; i < words.length - 1; i++) {
    if (words[i - 1] === first && words[i] === second) ans.push(words[i + 1]);
  }

  return ans;
};

console.log(findOcurrences("we will we will rock you", "we", "will"));
