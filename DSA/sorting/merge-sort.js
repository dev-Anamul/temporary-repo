/**
 *
 * @param {number[]} arr
 */

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */

const merge = (arr1, arr2) => {
  let ans = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  return [...ans, ...arr1.slice(i), ...arr2.slice(j)];
};

console.log(mergeSort([7, 3, 5, 7, 2, 10, 1, 2, 4, 6]));
