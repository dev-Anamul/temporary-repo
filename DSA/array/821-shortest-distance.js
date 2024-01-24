/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let ans = [];
  let prevInd = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === c) prevInd = i;
    let ind = s.indexOf(c, i);
    ans.push(Math.min(Math.abs(i - ind), Math.abs(i - prevInd)));
  }

  return ans;
};

console.log(shortestToChar("loveleetcode", "e"));
