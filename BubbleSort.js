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
  let noSwap; // this is to optomize sort
  //   let passCount = 0; // uncomment this and line 31 to see the difference of optomizing with `noSwap`

  for (let i = arr.length; i > 0; i--) {
    noSwap = true; // assume no swaps have been made iitially
    for (let j = 0; j < i - 1; j++) {
      console.log("here", arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false; // once we have made a swap, toggle the value
      }
      //   passCount++;
    }
    if (noSwap) break; // if the no swap has been made, no need to continue the loop again
  }
  return console.log("final", arr, passCount);
}

// TESTED HERE
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]); // OPTOMIZED TEST
// bubbleSort([33, 2, 1, 5, 66, 4, 200]);
