/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const elObj = nums.reduce((acc, cur) => {
    if (acc[cur]) acc[cur] += 1;
    else acc[cur] = 1;
    return acc;
  }, {});

  const resultArr = [];
  for (let i = 0; i < k; i++) {
    resultArr.push(+Object.keys(elObj)[i]);
  }
  console.log(elObj);
  return resultArr;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
