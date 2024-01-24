/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  let delCount = arr.length / 20;
  let trimArr = arr.slice(delCount, arr.length - delCount);
  let sum = trimArr.reduce((acc, cur) => acc + cur);
  return sum / trimArr.length;
};

console.log(
  trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])
);
