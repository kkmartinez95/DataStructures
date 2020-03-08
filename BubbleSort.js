/*
BUBBLE SORT - 
A sorting algo where the largest vals bubble up to the top!

Notes: 
    => not efficient, not commonly used

Pseudo-code:
    => define func that takes an array of nums
    => start looping with a variable called i, i = end of the array and work towards the beginning
    => loop again, j = beginning of array until i-1
    => if arr[j] is greater than arr[ j+ 1], swap the two values
    => return sorted array

*/

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return console.log(arr);
}

bubbleSort([33, 2, 1, 5, 66, 4, 200]);
