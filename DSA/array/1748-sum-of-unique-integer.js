/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const numObj = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const unique = Object.keys(numObj).filter((el) => numObj[el] === 1);

  if (unique.length === 0) return 0;
  else return unique.reduce((acc, cur) => acc + +cur, 0);
};

console.log(sumOfUnique([1, 2, 3, 2]));
