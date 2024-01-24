/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numObj = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const filteredArr = Object.keys(numObj).filter((el) => numObj[el] === 1);

  return +filteredArr[0];
};

console.log(singleNumber([2, 2, 3, 2]));
