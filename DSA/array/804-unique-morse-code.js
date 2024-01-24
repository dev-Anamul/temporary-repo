/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  // prettier-ignore
  const convArr=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  // prettier-ignore
  const alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const obj = {};

  for (let word of words) {
    let con = "";
    for (let ltr of word) con += convArr[alphaArr.indexOf(ltr)];
    obj[con] = obj[con] ? obj[con] + 1 : 1;
  }

  return Object.keys(obj).length;
};

console.log(uniqueMorseRepresentations(["a"]));
