/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let strObj = {};
  for (let ltr of s) {
    strObj[ltr] = strObj[ltr] ? strObj[ltr] + 1 : 1;
  }

  let valArr = Object.values(strObj);

  return valArr.every((val) => val === valArr[0]);
};

console.log(areOccurrencesEqual("abaacbc"));
