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

// Example usage:

const subsequence = (array) => {
  const subsequences = [];
  generateSubsequences(array, 0, [], subsequences);
  return subsequences;
};
const array = [1, 2, 3];

console.log(subsequence(array));

const subWitBit = (nums) => {
  let len = nums.length;
  let subS = 1 << len;
  let ans = [];

  for (let mask = 0; mask < subS; mask++) {
    let subArr = [];
    for (let i = 0; i < len; i++) {
      if (((mask >> i) & 1) !== 0) subArr.push(nums[i]);
    }

    if (
      !ans.some(
        (el) =>
          JSON.stringify(el.sort((a, b) => a - b)) ===
          JSON.stringify(subArr.sort((a, b) => a - b))
      )
    )
      ans.push(subArr.sort((a, b) => a - b));
  }
  return ans;
};

console.log(subWitBit([4, 4, 4, 1, 4]));
