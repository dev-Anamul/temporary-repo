/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let obj = {};
  nums.forEach((val, ind) => {
    if (ind == 0) obj[ind] = val;
    else {
      let prevIndVal = obj[ind - 1];
      obj[ind] = prevIndVal + val;
    }
  });

  console.log(obj);
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
