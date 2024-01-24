/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const result = [];

  while (s) {
    result.push(s.substring(0, k));
    s = s.substring(k);
  }

  let last = result[result.length - 1];

  if (last.length < k)
    result[result.length - 1] = last + fill.repeat(k - last.length);

  return result;
};

console.log(divideString("abcdefghij", 3, "x"));
