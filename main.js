"use strict";

var a = 1;

function test(){
    var a = 'one'
    function inner(){
        var a = 'two'
        console.log(a)
    }
    inner()
    console.log(a)
}

test()        
console.log(a); 

// same as let