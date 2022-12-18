"use strict";

let a = 1;

function test(){
    let a = 'one'
    function inner(){
        let a = 'two'
        console.log(a)
    }
    inner()
    console.log(a)
}

test()            // two, one
console.log(a);   // 1