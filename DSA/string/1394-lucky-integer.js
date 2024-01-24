/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const obj = {};

  for (let num of arr) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  let lucky = -1;

  for (let key of Object.keys(obj)) {
    if (key == obj[key]) lucky = Math.max(lucky, obj[key]);
  }

  return lucky;
};

console.log(findLucky([1, 2, 2, 3, 3, 3, 2]));
