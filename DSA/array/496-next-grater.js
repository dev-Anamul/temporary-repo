/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let ans = [];
  for (let num of nums1) {
    let match = 0;
    let nextGret = -1;
    for (let i = 0; i < nums2.length; i++) {
      if (num === nums2[i]) match++;
      if (match && nums2[i] > num) {
        nextGret = i;
        break;
      }
    }
    if (nextGret !== -1) ans.push(nums2[nextGret]);
    else ans.push(-1);
  }

  return ans;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
