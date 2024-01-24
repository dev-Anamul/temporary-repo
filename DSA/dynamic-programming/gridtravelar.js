const gridTravelar = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTravelar(m - 1, n, memo) + gridTravelar(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelar(18, 18));
console.log(gridTravelar(28, 28));
console.log(gridTravelar(38, 38));
