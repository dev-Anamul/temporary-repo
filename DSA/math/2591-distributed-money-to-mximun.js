/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  if (children > money) return -1;
  if (money < children - 1 + 8) return 0;
  for (let i = children; i >= 1; i--) {
    let multi = i * 8;
    if (multi <= money && money - multi !== 4) return i;
  }

  return -1;
};

console.log(distMoney(3, 2));
