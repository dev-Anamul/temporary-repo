/**
 *
 * @param {number[]} arr
 */
const selectionSort = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
        count++;
      }
    }
  }
  console.log(count);

  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(selectionSort([6, 1, 2, 3, 4, 5]));
