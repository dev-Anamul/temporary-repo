/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let total = arrivalTime + delayedTime;
  if (total === 24) return 0;
  else if (total < 24) return total;
  else return total - 24;
};

console.log(findDelayedArrivalTime(13, 11));
