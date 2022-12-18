"use strict";

console.log(this)   // Window

let test = () => {
    console.log(this)
}

function test2() {
    console.log(this)
}

test()              // Window

test2()             // undefined

// arrow functions behave like they are binded to parent's 'this'

// in event listeners we commonly do not use arrow functions so that we get the exact 'this' and not the parent 'this' object