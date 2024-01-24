/**
 *
 * @param {number[]} arr
 */

const bubleSort = (arr) => {
  let count = 0;

  for (let i = arr.length - 1; i >= 1; i--) {
    
    let isSwap = false;

    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
      count++;
    }

    if (!isSwap) break;
  }

  console.log(count);
  return arr;
};


const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(bubleSort([1, 2, 3, 4, 5, 6]));
