"use strict";

for (var i = 0; i < 5; i++) {
    console.log(i)  // 0 1 2 3 4
}

console.log(i) // 5

// var's scope is block limited only when the block is a function's block
// i.e. var is not limited in a for loop block, or if block
// that was the main reason they stopped using the var keyword
// because things were getting messed up

// with let we have a smaller trace, bug free code