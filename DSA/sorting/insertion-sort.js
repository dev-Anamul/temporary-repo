/**
 *
 * @param {number[]} arr
 */
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }

  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(insertionSort([5, 4, 6, 2, 3, 6, 7, 2, 6]));
