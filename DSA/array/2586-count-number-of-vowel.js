/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = left; i <= right; i++) {
    let word = words[i];
    if (
      vowel.includes(word.charAt(0)) &&
      vowel.includes(word.charAt(word.length - 1))
    )
      count++;
  }

  return count;
};

console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
