/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let lowerLtr = licensePlate.toLowerCase();
  let ltrObj = lowerLtr
    .split("")
    .filter(
      (el, i) => lowerLtr.charCodeAt(i) >= 97 && lowerLtr.charCodeAt(i) <= 122
    )
    .reduce((acc, el) => {
      acc[el] = acc[el] ? acc[el] + 1 : 1;
      return acc;
    }, {});

  console.log(ltrObj);
  for (let word of words) {
    let innerObj = {};
    for (let ltr of word) {
      innerObj[ltr] = innerObj[ltr] ? innerObj[ltr] + 1 : 1;
    }
    let isAdd = true;
    for (let ltr of Object.keys(innerObj)) {
      if (!ltrObj[ltr] || ltrObj[ltr] > innerObj[ltr]) break;
    }
  }
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
