/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let strObj = {};

  for (let ltr of s) {
    strObj[ltr] = strObj[ltr] ? strObj[ltr] + 1 : 1;
  }

  let sorLtr = Object.keys(strObj).sort((a, b) => a - b);

  
  console.log(strObj);
};

console.log(sortString("aacbaabbbbcccc"));
