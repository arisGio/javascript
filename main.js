"use strict";

function hello() {
    console.log('Hello world!')
}

// functions are 1st-class citizens
// a 1st-class citizen can be assigned to a variable

console.log(hello) // returns: that hello is a function

let x = hello // but instead you can aasign to variable
console.log(x) // returns function

// NB: we can pass a function as an argument to another function, which is very powerful