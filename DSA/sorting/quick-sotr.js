/**
 *
 * @param {number[]} arr
 * 
 */
const quickSort = (arr) => {
  sort(arr, 0, arr.length - 1);
  return arr;
};

const sort = (arr, low, high) => {
  if (low < high) {
    let partition = partitionFunc(arr, low, high);
    sort(arr, low, partition - 1);
    sort(arr, partition + 1, high);
  }
};

const partitionFunc = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) i++;
    while (arr[j] > pivot && j >= low + 1) j--;
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, low, j);

  return j;
};

let swap = (arr, ind1, ind2) => {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
};

console.log(quickSort([1, 5, 2, 7, 9, 3, 6, 8]));
