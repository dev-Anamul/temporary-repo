/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const productObj = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    let prev = productObj[nums.length - i - 1]
      ? productObj[nums.length - i - 1]
      : 1;
    productObj[nums.length - i] = nums[i] * prev;
  }

  return productObj;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));

function getBinaryRepresentation(num) {
  const invertedNum = ~num >>> 0; // Perform bitwise inversion and convert to unsigned 32-bit integer
  console.log(invertedNum);

  let str = invertedNum.toString(2);
  console.log(str.length);
  let setBit = num | (1 << 1);
  let unSetBit = num & ~(1 << 0);
  let toggle = num ^ (1 << 2);
  console.log(setBit.toString(2));
  console.log(unSetBit.toString(2));
  console.log(toggle.toString(2));
  let a = "a";
  let A = a | (1 << 5);
  console.log(A);
  return str;
}

console.log(getBinaryRepresentation(9));
