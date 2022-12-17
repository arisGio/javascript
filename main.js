"use strict";

function hello(name) {
    console.log(name ? `Hello ${name}` : 'Hello world!')
}

hello() // Hello world!

hello('Bill') // Hello Bill