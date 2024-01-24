/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let r = BigInt(n - index - 1);
  let l = BigInt(index);

  let high = BigInt(maxSum);
  let low = 1n;
  let res = 0n;

  while (low <= high) {
    let mid = BigInt((high - low) / 2n + low);
    let sum = mid;
    let rs = 0n;
    let ls = 0n;
    let m = mid - 1n;

    if (r <= m) rs = (m * (m + 1n)) / 2n - ((m - r) * (m - r + 1n)) / 2n;
    else rs = (m * (m + 1n)) / 2n + 1n * (r - m);

    if (l <= m) ls = (m * (m + 1n)) / 2n - ((m - l) * (m - l + 1n)) / 2n;
    else ls = (m * (m + 1n)) / 2n + 1n * (l - m);

    sum += rs + ls;

    if (sum <= maxSum) {
      res = mid;
      low = mid + 1n;
    } else high = mid - 1n;
  }

  return res;
};

console.log(maxValue(3, 0, 815094800));
