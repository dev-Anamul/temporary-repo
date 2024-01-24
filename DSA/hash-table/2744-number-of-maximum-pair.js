/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let reverseWord = strReverse(words[j]);
      if (words[i] === reverseWord) count++;
    }
  }

  return count;
};

/**
 *
 * @param {string} str
 */
const strReverse = (str) => {
  if (str.length === 0) return str;
  return strReverse(str.substring(1)) + str.charAt(0);
};

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
