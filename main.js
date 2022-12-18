"use strict";

const a = [1, 2, 3, 1, 'test', 6]

for (let i in a){
    console.log(i) // 0 1 2 3 4 5
}

for (let i of a){
    console.log(i) // 1 2 3 1 'test' 6
}