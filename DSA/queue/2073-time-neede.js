/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let count = 0;
  let result = 0;
  while (tickets[k] !== 0) {
    if (tickets[count] !== 0) {
      tickets[count++] -= 1;
      result += 1;
    } else count++;

    if (count === tickets.length) count = 0;
  }

  return result;
};

console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
