/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let arr = [first];

  for (let i of encoded) {
    arr.push(arr[arr.length - 1] ^ i);
  }

  return arr;
};

console.log(decode([6, 2, 7, 3], 4));
