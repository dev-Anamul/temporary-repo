// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var thirdMax = function (nums) {
//   const newArr = nums
//     .sort((a, b) => b - a)
//     .reduce((acc, cur) => {
//       if (!acc.includes(cur)) acc.push(cur);
//       return acc;
//     }, []);
//   if (newArr.length < 3) return newArr[0];
//   else return newArr[2];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const numObj = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const keys = Object.keys(numObj);
  if (keys.length < 3) return +keys[keys.length - 1];
  else return +keys[keys.length - 3];
};
console.log(thirdMax([1, 2, 2, 5, 3, 5]));

// frappe access token
// a25499d89e65c22;
