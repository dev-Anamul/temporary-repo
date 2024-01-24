/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let rangeArr = s.split(":");
  let start = Number(rangeArr[0].charAt(1));
  let end = Number(rangeArr[1].charAt(1));
  let ltrStart = rangeArr[0].charCodeAt(0);
  let ltrEnd = rangeArr[1].charCodeAt(0);

  let ans = [];

  for (let i = ltrStart; i <= ltrEnd; i++) {
    for (let j = start; j <= end; j++) {
      let cell = String.fromCharCode(i);
      ans.push(cell + j);
    }
  }

  return ans;
};

console.log(cellsInRange("A1:F1"));
