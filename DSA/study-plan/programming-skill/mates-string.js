/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let len = 0;
  let i = 1;
  let lps = Array.from({ length: needle.length }, () => 0);

  while (i < needle.length) {
    if (needle[i] === needle[len]) {
      lps[i] = len + 1;
      i += 1;
      len += 1;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i += 1;
      }
    }
  }

  let j = 0;
  let k = 0;

  while (j < haystack.length) {
    if (haystack[j] === needle[k]) {
      j += 1;
      k += 1;
    } else {
      if (k !== 0) k = lps[k - 1];
      else j += 1;
    }
    if (k === needle.length) {
      let retunvalue = j - k;
      k = lps[k - 1];
      return retunvalue;
    }
  }

  return -1;
};

console.log(strStr("aaa", "aaa"));
