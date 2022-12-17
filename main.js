"use strict";

let hello = () => 'Hello world';

let sum = (a,b) => a + b;

let subtract = (a,b) => {
    return a - b;
}

console.log(sum(5,6)) // 11

console.log(subtract(5,3)) // 2

console.log(hello())  // Hello world