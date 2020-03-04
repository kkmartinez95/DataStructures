// PROMPT: You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

/*
indexOf('or', 'hello world'); // should return 7
indexOf('hello world', 'or'); // should return -1
indexOf('howdy', 'hello world'); // should return -1
indexOf('oox', 'ooboxoooxo'); // should return 6
*/

function indexOf(needle, haystack) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j + 1 === needle.length) return i;
    }
  }
  return -1;
}

console.log(indexOf("or", "hello world"));
console.log(indexOf("hello world", "or")); // should return -1
console.log(indexOf("howdy", "hello world")); // should return -1
console.log(indexOf("oox", "ooboxoooxo")); // should return 6
