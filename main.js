"use strict";

let a = [1,2,3,4,5]

console.log(a) // 1 2 3 4 5
console.log(a[2]) // 3
console.log(a[3]) // 4

delete a[2]

console.log(a) // 1 2 empty 4 5
console.log(a[2]) // undefined
console.log(a[3]) // 4