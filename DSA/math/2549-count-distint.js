/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  let disArr = [];
  disArr.push(n);

  let newitem = 0;
  while (newitem !== n) {
    for (let i = 1; i <= n; i++) {
      let subArr = [];
      for (let j = 0; j < disArr.length; j++) {
        if (disArr[j] % i === 1) {
          subArr.push(i);
          newitem++;
        }
      }
      disArr.push(...subArr);
    }
  }

  let set = new Set(disArr);
  return set.size;
};

console.log(distinctIntegers(5));
