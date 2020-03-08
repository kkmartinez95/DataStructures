/*
 SELECTION SORT
    => Similar to bubble sort, but instead of first placing large values into sorted position, it plces small values into sorted position.

Pseudo-code:
    => store the first elem as the smallest val you've seen so far
    => Compare this item to the next time in the array until you find a smaller num
    => if the smaller num is found, reassign the small numer to be the new 'minimum' and contine until the end of the arr
    => if the 'minimum' is not the val(index) you initially began with, swap the two vals
    => repeat this with the next elem until the arr is sorted

    BIG O:
    => O(n^2)
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // n
    let currentMinimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      // n
      if (arr[currentMinimum] > arr[j]) {
        currentMinimum = j;
      }
    }
    if (i !== currentMinimum) {
      // optomization, this conditional makes it so yo can skip swappign if the lowerst nums are already at the beginning
      let temp = arr[i];
      arr[i] = arr[currentMinimum];
      arr[currentMinimum] = temp;
    }
  }

  return console.log("sorted array", arr);
}
// TESTED HERE
selectionSort([33, 2, 1, 5, 66, 4, 200]);
