/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  let length = arr.length;
  let subArrs = 1 << length;
  const arrOr = [];
  for (let mask = 0; mask < subArrs; mask++) {
    let valOr = 0;
    for (let i = 0; i < length; i++) {
      if (((mask >> i) & 1) !== 0) valOr |= arr[i];
    }
    if (valOr) arrOr.push(valOr);
  }

  let set = new Set(arrOr);
  return set.size;
};

console.log(subarrayBitwiseORs([1, 2, 4]));

console.log(1 | 4);
