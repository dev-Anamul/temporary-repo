/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const resObj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let count = 0;
    while (num !== 0) {
      if ((num & 1) !== 0) count++;
      num = num >> 1;
    }

    resObj[count] ? resObj[count].push(arr[i]) : (resObj[count] = [arr[i]]);
  }
  console.log(resObj);
  return Object.keys(resObj).reduce((acc, cur) => {
    let sortItem = resObj[cur].sort((a, b) => a - b);
    acc = acc.concat(sortItem);
    return acc;
  }, []);
};

console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
