// /**
//  *
//  * @param {Number[]} arr
//  */
// const tripletWithZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     const unorderArr = [];

//     for (let j = i + 1; j < arr.length; j++) {
//       const sum = -(arr[i] + arr[j]);

//       if (unorderArr.includes(sum)) {
//         console.log(`(${sum} ${arr[i]} ${arr[j]})`);
//       } else unorderArr.push(arr[j]);
//     }
//   }
// };

// tripletWithZero([1, -1, 0, 2, -2, 3]);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (arr) {
  const outArr = [];
  for (let i = 0; i < arr.length; i++) {
    const unorderArr = [];

    for (let j = i + 1; j < arr.length; j++) {
      const sum = -(arr[i] + arr[j]);

      if (unorderArr.some((a) => Object.is(a, sum))) {
        outArr.push([sum, arr[i], arr[j]]);
      } else unorderArr.push(arr[j]);
    }
  }

  return uniqueArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
