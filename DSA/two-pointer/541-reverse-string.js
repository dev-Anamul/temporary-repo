/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  return _reverse(s, k);
};

/**
 *
 * @param {string} str
 * @param {number} k
 */
const _reverse = (str, k) => {
  if (!str) return "";
  let ksub = str.substring(0, k).split("");

  let i = 0;
  let j = k - 1;

  while (i <= j) {
    let temp = ksub[i];
    ksub[i] = ksub[j];
    ksub[j] = temp;
    i++;
    j--;
  }

  let fsub = ksub.join("") + str.substring(k, 2 * k);

  return fsub + _reverse(str.substring(2 * k), k);
};

console.log(reverseStr("abcdefg", 8));
