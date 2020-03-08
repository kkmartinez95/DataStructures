/*
MERGE SORT

    => comination of merging and sorting
    => works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

HOW TO MERGE TWO SORTED ARRAYS:
    => in order to implement merge sort, it's useful to first implement a func responsible for merging two sorted arrays
    => given two sorted arrays, the helper func should create a new array which is also sorted and consists of all the elements in the two input arrays

Pseudo-code:
    => create an empty array, which will be returned at the end
    => take a look at the smallest values in each input array, two counters: i & j (both starting at 0)
    => while there are still values we haven't looked at, (while i and j)
        => if the value in the first arr is smaller, than the value in the second arr, push the value in the first array into our resulting arr and move on to the next value in the first array
        => if the value in the first arr is larger, than the value in the second arr, push the value in the second array into our resulting arr and move on to the next value in the second array
        => Once we finsh looping one array, push in all remaining values from the other array.
*/

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      // console.log("arr1", arr1[i], "arr2", arr2[j]);
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    // grabs the last few elements that werent looked at in the initial while loop
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// merge([1, 3, 5], [2, 4, 6, 7, 8]);

/**
mergeSort Pseudo-code:
  => break up the array into halves until you have arrays that are empty or have one element (using slice())
  => Base case: array length is less than or equal to 1;
  => Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  => Once the array has been merged back together, retrun the merges (and sorted!) array
 */

// BIG O: O(n log n)
// SPACE: O(n)
function mergeSort(arr) {
  // log n
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right); // n
}

console.log(mergeSort([2, 6, 1, 7, 99, 12, 56, 87, 3]));
