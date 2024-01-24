/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let count = 0;
  for (let boxType of boxTypes) {
    if (boxType[0] <= truckSize) {
      count += boxType[0] * boxType[1];
      truckSize -= boxType[0];
    } else {
      count += truckSize * boxType[1];
      truckSize = 0;
      break;
    }
  }
  console.log(boxTypes);

  return count;
};

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
