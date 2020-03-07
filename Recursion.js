function checkForOdd(arr) {
  // if there is nothing in the array, all the nums were even, return true;
  if (arr.length === 0) {
    return console.log("TRUE"), true;
  }
  // check the first elem if it is odd or not
  // if its odd, return false, if its even, shift it off the first elem
  if (arr[0] % 2 === 1) {
    return console.log("FALSE", arr), false;
  } else {
    // call on checkforOdd on that shortened array
    arr.shift();
    checkForOdd(arr);
  }
}

checkForOdd([2, 4, 10, 8, 89797081]);
