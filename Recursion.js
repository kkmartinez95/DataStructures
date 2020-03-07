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

console.log(factorial(5));
