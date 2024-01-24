/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (expectVal) => {
      if (val === expectVal) return true;
      else throw new Error("Not Equal");
    },
    notToBe: (expectVal) => {
      if (val !== expectVal) return true;
      else throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5));

