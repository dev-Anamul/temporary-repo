/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const resultArr = [];
  for (let can of candies) {
    if (candies.every((el) => can + extraCandies >= el)) resultArr.push(true);
    else resultArr.push(false);
  }

  return resultArr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
