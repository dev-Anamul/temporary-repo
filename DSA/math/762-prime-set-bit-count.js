/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let ans = 0;
  for (let i = left; i <= right; i++) {
    let num = i;
    let count = 0;
    while (num !== 0) {
      if (((num >> 0) & 1) !== 0) count++;
      num = num >> 1;
    }
    if (isPrime(count)) ans += 1;
  }

  return ans;
};

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(countPrimeSetBits(10, 15));
