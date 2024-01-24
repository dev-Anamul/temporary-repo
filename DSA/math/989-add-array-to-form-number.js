/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let n = num.join("");
  let sum = BigInt(n) + BigInt(k);

 
  return Array.from(sum.toString(), (x) => +x);
};

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
