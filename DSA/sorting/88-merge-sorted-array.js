/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let k = 0;

  let ans = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      ans.push(nums1[i]);
      i++;
      k++;
    } else {
      ans.push(nums2[j]);
      j++;
      k++;
    }
  }
  if (i !== m) {
    nums1.splice(k, m - i, ...nums1.slice(i));
  }

  if (j !== n) {
    nums1.splice(k, n - j, ...nums2.slice(j));
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3));
