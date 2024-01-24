/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let compNum = "";
  while (num !== 0) {
    if ((num & 1) !== 0) compNum = 0 + compNum;
    else compNum = 1 + compNum;
    num = num >> 1;
  }
  // convert complement numbe into
  let decimalNum = 0;
  for (let i = compNum.length - 1; i >= 0; i--) {
    let workInd = compNum.length - i - 1;
    decimalNum += compNum[i] * 2 ** workInd;
  }

  return decimalNum;
};

console.log(findComplement(5));
