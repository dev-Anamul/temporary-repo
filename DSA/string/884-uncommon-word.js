/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let words = s1.split(" ").concat(s2.split(" "));

  let obj = {};

  for (let word of words) {
    obj[word] = obj[word] ? obj[word] + 1 : 1;
  }

  return Object.keys(obj).filter((key) => obj[key] === 1);
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));

11_11_12_22_223