"use strict";

function hello(name = 'world') {
    return `Hello ${name}!`
}

hello() // does nothing in the console

let greeting = hello()
console.log(greeting) // with return we get a result
// and not execute things that show up in the console

// we could also do...
console.log(hello()) // returns the return value

console.log(hello) // returns that hello is a function