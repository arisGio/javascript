"use strict";

function hello(name = 'world') {
    console.log(`Hello ${name}!`)
}

hello()       // Hello world!

hello('Bill') // Hello Bill!