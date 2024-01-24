/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const ans = [];
  for (let i = left; i <= right; i++) {
    if (_helper(i)) ans.push(i);
  }

  return ans;
};

/**
 *
 * @param {number} n
 */
const _helper = (n) => {
  const digArr = Array.from(n.toString(), (x) => +x);
  for (let dig of digArr) {
    if (n % dig === 0) continue;
    else return false;
  }

  return true;
};

console.log(selfDividingNumbers(47, 85));
