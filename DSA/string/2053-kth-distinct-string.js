/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let wordObj = {};

  for (let ltr of arr) {
    wordObj[ltr] = wordObj[ltr] ? wordObj[ltr] + 1 : 1;
  }

  let disArr = Object.keys(wordObj).filter((el) => wordObj[el] === 1);
  return disArr[k - 1] ? disArr[k - 1] : "";
};

console.log(
  kthDistinct(
    [
      "fp",
      "neq",
      "wuw",
      "mxoz",
      "e",
      "tdo",
      "zp",
      "yc",
      "tg",
      "rtki",
      "z",
      "icppp",
      "ficph",
      "oq",
      "jmxj",
      "nor",
      "dlhp",
      "iaca",
      "qin",
      "qghtw",
      "n",
      "mrjtx",
      "bx",
      "fmyfr",
      "pp",
    ],
    3
  )
);
