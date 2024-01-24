// /**
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @return {number[]}
//  */
// var relativeSortArray = function (arr1, arr2) {
//   let ansArr = [];

//   for (let n of arr2) {
//     let j = 0;
//     while (j < arr1.length) {
//       if (n === arr1[j]) {
//         ansArr.push(arr1[j]);
//         arr1[j] = -1;
//       }
//       j++;
//     }
//   }

//   arr1.sort((a, b) => a - b);

//   return [...ansArr, ...arr1.slice(arr1.lastIndexOf(-1) + 1)];
// };

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let obj = arr1.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let ans = [];
  for (let n of arr2) {
    for (let i = 0; i < obj[n]; i++) {
      ans.push(n);
    }
    delete obj[n];
  }

  let sortKey = Object.keys(obj).sort((a, b) => a - b);

  for (let n of sortKey) {
    for (let i = 0; i < obj[n]; i++) {
      ans.push(+n);
    }
    delete obj[n];
  }

  return ans;
};

console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
