/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  items1.sort((a, b) => a[0] - b[0]);
  items2.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let i = 0;
  let j = 0;

  while (i < items1.length && j < items2.length) {
    if (items1[i][0] === items2[j][0]) {
      ans.push([items1[i][0], items1[i][1] + items2[j][1]]);
      i++;
      j++;
    } else if (items1[i][0] < items2[j][0]) {
      ans.push(items1[i]);
      i++;
    } else {
      ans.push(items2[j]);
      j++;
    }
  }

  return [...ans, ...items1.slice(i), ...items2.slice(j)];
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);
