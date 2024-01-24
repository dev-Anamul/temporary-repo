/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let obj = {};

  for (let i = 0; i < gain.length; i++) {
    if (i === 0) obj[gain[i]] = gain[i];
    else obj[gain[i]] = obj[gain[i - 1]] + gain[i];
  }
  console.log(obj);
  let max = Math.max(...Object.values(obj));
  if (max < 0) return 0;
  else return max;
};

console.log(largestAltitude([-26,62,-32,-58,-95,48,43,93,-86,-23,-53,-81,91,63,-2,17,-96,91,-18,16,18,34,-61,-72,-20,39,15,-50,8,14,54,23,97,9,-23,44,-90,-88,25,59,72,-90,-44,-23,-19,44,-90,-54,-87,77,-65]));
