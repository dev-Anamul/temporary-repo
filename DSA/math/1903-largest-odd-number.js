/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let oddInd = -1;

  for (let i = 0; i < num.length; i++) {
    if (Number(num.charAt(i)) % 2 !== 0) oddInd = i;
  }

  if (oddInd === -1) return "";
  else return num.substring(0, oddInd + 1);
};

console.log(largestOddNumber("4206"));
