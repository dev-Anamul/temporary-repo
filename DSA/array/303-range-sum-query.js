class NumArray {
  #arr = [];
  constructor(nums) {
    this.#arr = nums;
  }

  sumRange(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.#arr[i];
    }
    return sum;
  }
}
