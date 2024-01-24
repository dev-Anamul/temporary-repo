/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let senArr = sentence.split(" ");
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < senArr.length; i++) {
    if (vowels.includes(senArr[i].charAt(0).toLocaleLowerCase())) {
      // start with vowel
      senArr[i] = senArr[i] + "ma" + "a".repeat(i + 1);
    } else {
      // start with consonant
      senArr[i] =
        senArr[i].substring(1) + senArr[i].charAt(0) + "ma" + "a".repeat(i + 1);
    }
  }

  return senArr.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));
