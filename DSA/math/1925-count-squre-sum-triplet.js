/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (nums) {
  let result = [];

  generateSubsequences(nums, 0, [], result);

  return result.length > 0 ? result[0] : false;
};

function generateSubsequences(arr, index = 0, current = [], result) {
  if (index === arr.length) {
    let curSub = current.slice();
    if (curSub.length === 3) {
      if (curSub[0] < curSub[1] && curSub[1] < curSub[2]) result[0] = true;
    }
    return;
  }

  // Include the current element
  current.push(arr[index]);
  generateSubsequences(arr, index + 1, current, result);

  // Exclude the current element
  current.pop();
  generateSubsequences(arr, index + 1, current, result);
}

console.log(countTriples([1, 1, 1, 1]));
