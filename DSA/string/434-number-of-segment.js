/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let strArr = s.split(" ");
  let count = 0;

  for (let word of strArr) {
    if (word) count++;
  }

  return count;
};

console.log(countSegments("Hello, my name is John"));
