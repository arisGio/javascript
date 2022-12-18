"use strict";

const students = [
    {
        name: 'Alexia Alexiou',
        grade: 7
    },
    {
        name: 'Vasiliki Vasileiou',
        grade: 9
    },
    {
        name: 'Georgia Georgiou',
        grade: 10
    }
]

let meanValue = students.map(x => x.grade).reduce((a,b) => a + b, 0) / students.length
console.log(meanValue) // 8.666666...