/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let count = 0;

  for (let word of words) {
    let wordArr = chars.split("");
    let isMade = true;
    for (let ltr of word) {
      let ind = wordArr.indexOf(ltr);
      if (ind === -1) {
        isMade = false;
        break;
      }
      wordArr[ind] = 0;
    }
    if (isMade) count += word.length;
  }

  return count;
};

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
