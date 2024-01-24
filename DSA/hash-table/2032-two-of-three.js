/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let combineArr = [...nums1, ...nums2, ...nums3];

  let ans = [];

  for (let num of combineArr) {
    if (nums1.includes(num) && nums2.includes(num)) ans.push(num);
    else if (nums1.includes(num) && nums3.includes(num)) ans.push(num);
    else if (nums2.includes(num) && nums3.includes(num)) ans.push(num);
  }

  return Array.from(new Set(ans));
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
