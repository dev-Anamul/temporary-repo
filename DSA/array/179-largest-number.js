/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    return (b % 10) - (a % 10);
  });

  return nums.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));
