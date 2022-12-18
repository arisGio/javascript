"use strict";

let a = 1;

function test(){
    let a = 'one'
    console.log(a)
    function inner(){
        let a = 'two'
        console.log(a)
    }
    inner()
}

test()            // one, two
console.log(a);   // 1