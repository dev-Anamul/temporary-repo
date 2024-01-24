/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let set = new Set();

  for (let ltr of s) {
    if (Number(ltr) === 0 || Number(ltr)) set.add(+ltr);
  }

  let arr = Array.from(set);

  arr.sort((a, b) => b - a);

  return arr[1] === 0 ? arr[1] : arr[1] || -1;
};

console.log(secondHighest("abc1111"));
