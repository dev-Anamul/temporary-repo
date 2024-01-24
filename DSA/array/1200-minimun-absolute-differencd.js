/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = Math.abs(arr[0] - arr[1]);

  let ans = [];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) === min) ans.push([arr[i - 1], arr[i]]);
  }

  return ans;
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
