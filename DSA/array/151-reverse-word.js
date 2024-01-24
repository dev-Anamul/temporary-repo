/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const wordArr = s.split(" ");
  const reverseArr = [];

  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[wordArr.length - i - 1];

    if (word) reverseArr.push(wordArr[wordArr.length - i - 1].trim());
  }

  return reverseArr.join(" ");
};

console.log(reverseWords("  hello world  "));
