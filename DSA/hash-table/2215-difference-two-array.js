/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Filter = [];
  for (let num of nums1) {
    if (!nums1Filter.includes(num) && !nums2.includes(num))
      nums1Filter.push(num);
  }
  const nums2Filter = [];
  for (let num of nums2) {
    if (!nums2Filter.includes(num) && !nums1.includes(num))
      nums2Filter.push(num);
  }

  return [nums1Filter, nums2Filter];
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
