function checkForOdd(arr) {
  // if there is nothing in the array, all the nums were even, return true;
  if (arr.length === 0) {
    return console.log("TRUE"), true;
  }
  // check the first elem if it is odd or not
  // if its odd, return false, if its even, shift it off the first elem
  if (arr[0] % 2 === 1) {
    return console.log("FALSE"), false;
  } else {
    // call on checkforOdd on that shortened array
    arr.shift();
    checkForOdd(arr);
  }
}
// TESTED HERE
// checkForOdd([2, 4, 10, 8, 89797081]);

function factorialIter(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return console.log(total);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// TESTED HERE
// console.log(factorial(2));

// HELPER FUNCTIONS AND RECURSION

// prompt: collect all the odd values in an array

// function collectOdds(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 === 1) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   console.log(result);
//   return result;
// }

// PURE RECURSION METHOD
function collectOdds(arr) {
  let result = [];
  // i want to check the first elem in the arr,
  // if it is positive, remove the first element,
  // and call collectOdds again with shortend arr
  if (arr.length === 0) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOdds(arr.slice(1)));
  return result;
}
// TESTED HERE
// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 
BIG O

=> BEST: 0(1) 
found right away

=> AVERAGE: 0(n)
as n grows, so does the average amount of time it takes to search

=> WORST: 0(n)
if the inputs length is 1000, we have to travese it 1000 or n times.

*/

// SEARCH: LINEAR

let testArr = ["kaitlyn", "sam", "peter", 44, 8291, "lolz"];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // BIG O => O(n)
    if (arr[i] === target) {
      return console.log(i);
    }
  }
  return console.log(-1);
}
// TESTED HERE
// linearSearch(testArr, 81);

/* 
BINARY SEARCH

    => function accepts a sorted array and a target value
    => create a left and right pointer, 
    => while the left pointer is less than or equal to the right, continue looping
        => create a middle pointer
        => if you find the value you want, return the index
        => if the value is too small, move the left pointer up by 1;
        => if the value is too big, move the right pointer down by 1;
    => if the value is never found, return -1

*/

let numbersBS = [1, 2, 4, 33, 67, 74, 77, 89, 370, 902];

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== target && left <= right) {
//     if (target < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }
//   if (target === arr[middle]) {
//     return console.log("middle is: ", middle);
//   } else {
//     return console.log(-1);
//   }
// }

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== target && left <= right) {
    if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  arr[middle] === target ? console.log(middle) : console.log(-1);
}

binarySearch(numbersBS, 370);
binarySearch(numbersBS, 378090);
