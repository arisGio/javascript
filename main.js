"use strict";

let x = 5, y = 10;

console.log(x === 5 && y === 10) // true
console.log(x === 5 && y === 11) // false
// BOTH conditions must be true to result in true

console.log(x === 5 || y === 10) // true
console.log(x === 6 || y === 11) // false
// AT LEAST on condition must be true

let b = true;
console.log(b)// true
console.log(!b)// false
console.log(!(x === 5))// false
console.log(!(x === 15))// true