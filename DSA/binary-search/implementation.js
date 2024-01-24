/**
 *
 * @param {number[]} arr
 */
const binarySearch = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high - low > 1) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] < k) low = mid + 1;
    else high = mid;
  }

  if (arr[low] === k) return low;
  else if (arr[high] === k) return high;
  else return -1;
};

console.log(binarySearch([2, 3, 4, 5, 6, 7], 8));
