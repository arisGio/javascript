"use strict";

const arr1 = [1,2,3,4,5]
const arr2 = [1,'two',3,null,5]

const arr3 = [
    [1,2,3],
    ['one', 'two', 'three'] 
]

arr1.push(6)
arr1.push(7)
arr1.push('test')
console.log(arr1) // 1 2 3 4 5 6 7 'test'