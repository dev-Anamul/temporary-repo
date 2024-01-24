/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length !== 0) {
    stones.sort((a, b) => a - b);
    if (stones.length === 1) return stones[0];

    let last1 = stones.pop();
    let last2 = stones.pop();

    if (last1 === last2) continue;
    else stones.unshift(Math.abs(last1 - last2));
  }

  return 0;
};

console.log(lastStoneWeight([9,10,1,7,3]));
