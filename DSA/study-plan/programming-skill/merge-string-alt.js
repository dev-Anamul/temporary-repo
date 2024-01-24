/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  if (word1.length < word2.length) {
    let fst = 0;
    let lst = word1.length;
    while (fst < lst) {
      result += word1[fst] + word2[fst];
      fst += 1;
    }

    return (result += word2.substring(lst));
  } else {
    let fst = 0;
    let lst = word2.length;
    while (fst < lst) {
      result += word1[fst] + word2[fst];
      fst += 1;
    }

    return (result += word1.substring(lst));
  }
};

console.log(mergeAlternately("ab", "pq"));
