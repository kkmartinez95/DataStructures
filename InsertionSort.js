/*
INSERTION SORT

    => builds up the sort by graually creating a larger portion which is already sorted

Psueudo-code:
    => start by picking the second element of the array
    => now, compare the second elem with the one before it and swap if necessary
    => continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the elem in the correct place
    => repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  return console.log("SORTED", arr);
}

// TESTED HERE
insertionSort([33, 2, 1, 5, 66, 4, 200]);
