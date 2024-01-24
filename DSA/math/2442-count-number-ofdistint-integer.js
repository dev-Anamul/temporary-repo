/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let ans = [...nums];

  for (let num of nums) {
    ans.push(Number(_reverseNum(num.toString())));
  }

  console.log(ans);

  return new Set(ans).size;
};

/**
 *
 * @param {string} numStr
 */
const _reverseNum = (numStr) => {
  if (numStr.length === 1) return numStr;
  return _reverseNum(numStr.substring(1)) + numStr.charAt(0);
};

console.log(countDistinctIntegers([2, 2, 2]));
