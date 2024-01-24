/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let wordArr = s.split(" ");
  let ans = [];

  for (let word of wordArr) {
    ans[+word.charAt(word.length - 1) - 1] = word.substring(0, word.length - 1);
  }
  return ans.join(" ");
};

console.log(sortSentence("Myself2 Me1 I4 and3"));
