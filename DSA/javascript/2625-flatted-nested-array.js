/**
 *
 * @param {Array} arr
 * @returns
 */
const flat = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let tempArr = [];
    for (let item of arr) {
      if (item instanceof Array) tempArr.push(...item);
      else tempArr.push(item);
    }

    arr = tempArr;
  }

  return arr;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
);

const testArr = [1, 2, 3];

testArr.push(3, 4, 5, 5);

console.log(testArr);
