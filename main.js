"use strict";

const a = [1,2,3,'four',5]

let [b, c, ...r] = a

console.log(b) // 1
console.log(c) // 2
console.log(r) // [3,'four',5] rest of them