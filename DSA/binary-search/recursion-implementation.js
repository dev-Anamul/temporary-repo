const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  return _helper(nums, low, high, target);
};

const _helper = (arr, low, high, target) => {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  else if (target > arr[mid]) return _helper(arr, mid + 1, high, target);
  else return _helper(arr, low, mid - 1, target);
};

console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 8));
