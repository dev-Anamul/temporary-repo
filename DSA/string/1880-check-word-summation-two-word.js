/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let firstNum = Number(wordToNum(firstWord));
  let secondNum = Number(wordToNum(secondWord));
  let targetNum = Number(wordToNum(targetWord));

  return firstNum + secondNum === targetNum;
};

/**
 *
 * @param {string} str
 */
const wordToNum = (str) => {
  if (str.length === 1) return str.charCodeAt(0) - 97;
  return str.charCodeAt(0) - 97 + "" + wordToNum(str.substring(1));
};

console.log(isSumEqual("aaa", "a", "aab"));
