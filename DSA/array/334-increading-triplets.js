

function findTriplets(arr) {
    const triplets = [];
  
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    const n = arr.length;
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];
  
        if (sum === 0) {
          triplets.push([arr[i], arr[left], arr[right]]);
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return triplets;
  }