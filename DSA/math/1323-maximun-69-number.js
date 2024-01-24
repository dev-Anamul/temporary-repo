/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let digArr = Array.from(String(num), (n) => +n);
  let max = 0;

  for (let i = 0; i < digArr.length; i++) {
    let copyArr = [...digArr];
    if (digArr[i] === 9) {
      copyArr[i] = 6;
      max = Math.max(max, +copyArr.join(""));
    } else {
      copyArr[i] = 9;
      max = Math.max(max, +copyArr.join(""));
    }
  }

  return max;
};

console.log(maximum69Number(9996));
