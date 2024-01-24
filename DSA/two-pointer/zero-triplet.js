/**
 * @param {Number[]} arr
 * @return {Number[][]}
 */
var threeSum = function (arr) {
  const target = 0;
  const outArr = [];
  let testSet = new Set();
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum === target) {
        let key = `${arr[i]} ${arr[j]} ${arr[k]}`;
        if (!testSet.has(key)) {
          testSet.add(key);
          outArr.push([arr[i], arr[j], arr[k]]);
        }
        j++;
        k--;
      } else if (sum < target) j++;
      else k--;
    }
  }
  return outArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
