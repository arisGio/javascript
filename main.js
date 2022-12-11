"use strict";

const arr1 = [1,2,3,4,5]
const arr2 = [1,'two',3,null,5]

const arr3 = [
    [1,2,3],
    ['one', 'two', 'three'] 
]

for (let i in arr1) { // i is the index
    console.log(i) // 0 1 2 3 4 -> indices
    console.log(arr1[i]) // 1 2 3 4 5 --> arr1 elements
}

for (let element of arr2) {
    console.log(element) // 1,'two',3,null,5 -> array elements
}