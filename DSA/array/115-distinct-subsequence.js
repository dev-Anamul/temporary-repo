/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let strArr = s.split("");
  let result = [];
  //   generateSubsequences(strArr, 0, [], result);

  return result;
};

// /**
//  *
//  * @param {number} ind
//  * @param {string} s
//  * @param {string} t
//  * @param {Array} curArr
//  * @param {number} count
//  * @returns
//  */
// const _helper = (ind, arr, t, curArr, count) => {
//   if (ind >= arr.length) {
//     console.log(curArr);
//     // if (curStr === t) count++;
//     return;
//   }

//   curArr.push(arr[ind]);
//   _helper(ind + 1, arr, t, curArr, count);

//   curArr.pop();
//   _helper(ind + 1, arr, t, curArr, count);
// };

function generateSubsequences(arr, index = 0, current = [], result = []) {
  if (index === arr.length) {
    result.push(current.slice()); // Add a copy of the current subsequence to the result
    return;
  }

  // Include the current element
  current.push(arr[index]);
  generateSubsequences(arr, index + 1, current, result);

  // Exclude the current element
  current.pop();
  generateSubsequences(arr, index + 1, current, result);
}

console.log(numDistinct("bccbcdcabadabddbccaddcbabbaaacdba", "bccbbdc"));

console.log("abab" / "ab");
