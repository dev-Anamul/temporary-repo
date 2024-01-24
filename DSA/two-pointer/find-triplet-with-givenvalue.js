/**
 *
 * @param {Number[]} arr
 * @param {Number} x
 *
 */
const tripletWithGivenValue = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    const remainingArr = [];

    for (let j = i + 1; j < arr.length; j++) {
      const remaining = x - (arr[i] + arr[j]);

      if (remainingArr.includes(remaining)) {
        console.log(`(${remaining} ${arr[i]} ${arr[j]})`);
      } else remainingArr.push(arr[j]);
    }
  }
};

tripletWithGivenValue([1, 2, 4, 6, 3, 0], 7);
