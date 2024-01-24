/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const arr1 = nums.slice(0, n);
  const arr2 = nums.slice(n);
  const newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
