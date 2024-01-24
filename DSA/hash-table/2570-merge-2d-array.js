/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let maxLength = Math.max(nums1.length, nums2.length);
  const obj = {};

  for (let i = 0; i < maxLength; i++) {
    let numOne = nums1[i];
    let numTwo = nums2[i];

    if (numOne)
      obj[numOne[0]] = obj[numOne[0]] ? obj[numOne[0]] + numOne[1] : numOne[1];

    if (numTwo)
      obj[numTwo[0]] = obj[numTwo[0]] ? obj[numTwo[0]] + numTwo[1] : numTwo[1];
  }

  return Object.keys(obj).map((key) => [+key, obj[key]]);
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
