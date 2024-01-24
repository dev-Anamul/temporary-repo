/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const resultArr = [];
  for (let i = 0; i < queries.length; i++) {
    let xorResult = 0;
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      xorResult = xorResult ^ arr[j];
    }

    resultArr.push(xorResult);
  }

  return resultArr;
};

console.log(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ]
  )
);
