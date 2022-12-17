"use strict";

let name = 'Bill'

// 1st way
// if (name) {
//     console.log(`Hello ${name}`)
// } else {
//     console.log('Hello world')
// }

// 2nd way
// let greeting = name ? `Hello ${name}` : 'Hello world';
// console.log(greeting)

// 3rd way
console.log(name ? `Hello ${name}` : 'Hello world')
// it's like SYNTACTIC SUGAR