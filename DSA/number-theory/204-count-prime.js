/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i; i * j < n; j++) isPrime[i * j] = false;
  }

  return isPrime.reduce((count, primeflag) => {
    if (primeflag) count += 1;
    return count;
  }, 0);
};

console.log(countPrimes(956150));
