/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  let wordArr = text.split(" ");

  for (let word of wordArr) {
    let isTyped = true;
    for (let ltr of brokenLetters) {
      if (word.includes(ltr)) {
        isTyped = false;
        break;
      }
    }
    if (isTyped) count++;
  }

  return count;
};

console.log(canBeTypedWords("leet code", "e"));
