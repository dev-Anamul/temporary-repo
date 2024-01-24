/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  let arr1Obj = {};
  let arr2Obj = {};
  let count = 0;

  for (let word of words1) {
    arr1Obj[word] = arr1Obj[word] ? arr1Obj[word] + 1 : 1;
  }

  for (let word of words2) {
    arr2Obj[word] = arr2Obj[word] ? arr2Obj[word] + 1 : 1;
  }

  for (let key of Object.keys(arr1Obj)) {
    if (arr1Obj[key] === 1 && arr2Obj[key] === 1) count++;
  }

  return count;
};

console.log(countWords(["a","ab"], ["a","a","a","ab"]));
