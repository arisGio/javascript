"use strict";

const arr1 = [1,2,3,4,5]
const arr2 = [1,'two',3,null,5]

const arr3 = [
    [1,2,3],
    ['one', 'two', 'three'] 
]

arr1[2] = 5 // no error, even though arr1 is const, recall what Kyle said: const is the array pointer, not the actual memory content