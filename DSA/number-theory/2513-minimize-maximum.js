/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  let arr1 = [];
  let arr2 = [];

  let i = 1;
  while (uniqueCnt1 > arr1.length || uniqueCnt2 > arr2.length) {
    if (i % divisor1 !== 0 && i % divisor2 !== 0) {
      if (uniqueCnt1 > uniqueCnt2) arr1.push(i);
      else arr2.push(i);
    }
    if (
      i % divisor1 !== 0 &&
      arr1.length < uniqueCnt1 &&
      !arr1.includes(i) &&
      !arr2.includes(i)
    )
      arr1.push(i);
    if (
      i % divisor2 !== 0 &&
      arr2.length < uniqueCnt2 &&
      !arr2.includes(i) &&
      !arr1.includes(i)
    )
      arr2.push(i);
    i++;
  }
  console.log(arr1, arr2);
  return i - 1;
};

console.log(minimizeSet(2, 7, 1, 3));
