/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let numStr = num.toString();
  let count = 0;
  for (let i = 0; i < numStr.length - k + 1; i++) {
    let sub = numStr.substring(i, i + k);
    if (num % +sub === 0) count++;
  }

  return count;
};

console.log(divisorSubstrings(430043, 2));
