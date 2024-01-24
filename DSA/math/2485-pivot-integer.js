/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let leftSum = (mid * (mid + 1)) / 2;
    let rightSum = (n * (n + 1)) / 2 - leftSum + mid;

    if (leftSum === rightSum) return mid;
    else if (leftSum > rightSum) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
};

console.log(pivotInteger(4));
