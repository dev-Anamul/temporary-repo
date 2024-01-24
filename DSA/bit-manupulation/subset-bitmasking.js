const subSets = (nums) => {
  let length = nums.length;
  let totalSub = 1 << length;
  let ansArr = [];
  for (let mask = 0; mask < totalSub; mask++) {
    let subSet = [];
    for (let i = 0; i < length; i++) {
      if (((mask >> i) & 1) !== 0) subSet.push(nums[i]);
    }
    ansArr.push(subSet);
  }

  return ansArr;
};

console.log(subSets([1, 2, 3, 4]));
