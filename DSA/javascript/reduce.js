/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let acc = init;
  let start = 0;
  if (!init) {
    acc = nums[0];
    start = 1;
  }
  for (let i = start; i < nums.length; i++) {
    acc = fn(acc, nums[i], i, nums);
  }
  return acc;
};

const votes = [
  "js",
  "js",
  "java",
  "java",
  "java",
  "python",
  "python",
  "python",
  "go",
  "go",
  "go",
  "c",
  "c",
];

const voteCount = reduce(
  votes,
  (acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  },
  {}
);

console.log(voteCount);
