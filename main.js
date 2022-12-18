"use strict";

const a = [1, 2, 3, 1, 12, 6, 34, 634]

let b = a.filter(function(x){
    return x > 10
})

console.log(b)  // [12, 34, 634]