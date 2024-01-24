const arraySum = (n, arr) => {
  if (n < 0) return 0;
  return arraySum(n - 1, arr) + arr[n];
};

console.log(arraySum(3, [1, 2, 3, 4]));
