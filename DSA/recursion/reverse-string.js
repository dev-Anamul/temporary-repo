/**
 *
 * @param {string} s
 * @returns
 */
const reverseString = (s) => {
  if (s === "") return "";
  return reverseString(s.substring(1)) + s.charAt(0);
};

console.log(reverseString("hellow"));
