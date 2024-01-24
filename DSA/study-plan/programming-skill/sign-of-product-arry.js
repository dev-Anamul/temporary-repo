/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function (nums) {
  let multiple = 1;

  for (let i = 0; i < nums.length ; i++) {
    if (nums[i] === 0) {
      multiple = 0;
      break;
    } else {
      console.log(nums[i]);
      multiple *= nums[i];
    }
  }
  return signFunc(multiple);
};

const signFunc = (product) => {
  if (product > 0) return 1;
  else if (product < 0) return -1;
  else if (product === 0) return 0;
};

console.log(arraySign([-1, 1, -1, 1, -1]));
