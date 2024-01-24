/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let digArr = _digOfnum(num, []);

  for (let dig of digArr) {
    if (num % dig === 0) count++;
  }

  return count;
};

const _digOfnum = function (num, arr) {
  if (num <= 9) {
    arr.push(num);
    return arr;
  }
  arr.push(num % 10);
  return _digOfnum(Math.floor(num / 10), arr);
};

console.log(countDigits(1248));
