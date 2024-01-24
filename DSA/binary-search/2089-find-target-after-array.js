/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);

  let lb = lowerBound(sortedNums, target);

  if (lb === sortedNums.length || sortedNums[lb] !== target) return [];

  let ub = upperbound(sortedNums, target);

  let ans = [];

  for (let i = lb; i <= ub - 1; i++) {
    console.log(i);
    ans.push(i);
  }

  console.log(lb, ub);
  return ans;
};

const lowerBound = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

const upperbound = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};
console.log(targetIndices([1, 2, 5, 2, 3], 3));
