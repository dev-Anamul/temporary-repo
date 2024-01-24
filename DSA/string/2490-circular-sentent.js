/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let words = sentence.split(" ");

  if (words.length === 1 && words[0].charAt(0) !== words[0].at(-1))
    return false;
  for (let i = 0; i < words.length - 1; i++) {
    if (i === 0) {
      if (words[i].charAt(0) !== words[words.length - 1].at(-1)) return false;
      if (words[i].at(-1) !== words[i + 1].charAt(0)) return false;
    } else {
      if (words[i].at(-1) !== words[i + 1].charAt(0)) return false;
    }
  }

  return true;
};

console.log(isCircularSentence("Leetcode"));
