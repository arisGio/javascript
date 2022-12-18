"use strict";

let a = 1;

function test(){
    a = 'one'
    function inner(){
        a = 'two'
        console.log(a)
    }
    inner()
    console.log(a)
}

test()            // two, two
console.log(a);   // two