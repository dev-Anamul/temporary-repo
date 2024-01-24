/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let icount = 0;
  let dcount = s.length;
  let ans = [];

  for (let ltr of s) {
    if (ltr === "D") {
      ans.push(dcount);
      dcount--;
    } else {
      ans.push(icount);
      icount++;
    }
  }

  ans.push(icount);

  return ans;
};

console.log(diStringMatch("IIIID"));
