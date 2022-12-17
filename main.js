"use strict";

let hello = function () {
    return 'Hello world';
}

console.log(hello)   // returns function
console.log(hello()) // Helo world

// functions that have no name
// why are anonymous functions usefull? -> we can give functionality to an object's key
// reminder: the fullname key of the student object we defined in the past using an anonymous function