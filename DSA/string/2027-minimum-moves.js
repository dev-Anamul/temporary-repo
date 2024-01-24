/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let count = 0;
  let ans = 0;
  for (let i = 3; i <= s.length; i += 3) {
    let subStr = s.substring((i - 3) * count, i);
    if (Number(subStr) === 0) continue;
    else ans++;
    count++;
  }

  return ans;
};

console.log(minimumMoves("XX0X"));
