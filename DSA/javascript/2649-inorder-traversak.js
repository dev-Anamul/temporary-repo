/**
 *
 * @param {Array} arr
 */
const generateVal = (arr, resultArr) => {
  arr.forEach((item) => {
    if (!Array.isArray(item)) resultArr.push(item);
    else generateVal(item, resultArr);
  });
};

/**
 *
 * @param {Array} arr
 * @returns
 */
const inorderTraversal = function* (arr) {
  let resultArr = [];
  arr.forEach((v) => {
    if (!Array.isArray(v)) resultArr.push(v);
    else generateVal(v, resultArr);
  });

  let index = 0;
  while (index < resultArr.length) {
    yield resultArr[index++];
  }
};

const generator = inorderTraversal([
  1,
  2,
  [3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14]]]]]],
]);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
