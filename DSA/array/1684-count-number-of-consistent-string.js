/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let finalCount = 0;

  for (let word of words) {
    let count = 0;

    for (let ltr of word) {
      if (allowed.includes(ltr)) count++;
    }

    if (count === word.length) finalCount++;
  }

  return finalCount;
};

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
