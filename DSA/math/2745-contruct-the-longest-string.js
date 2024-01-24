/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function (x, y, z) {
  let count = 0;

  if (x > y) count = y * 2 + z + 1;
  else if (y > x) count = x * 2 + z + 1;
  else count = x + y + z;

  return count * 2;
};

console.log(longestString(3, 2, 2));
