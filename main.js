"use strict";

let x = 5, y = 10;

console.log(x == 5) // true
console.log(x == 15) // false

console.log(x == '5') // true, type conversion under the hood
// '5' --> 5 --> 5 == 5 is true
console.log(x === '5') // false, no type conversion, strict comparison