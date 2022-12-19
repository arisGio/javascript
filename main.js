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

console.log(students.sort((a,b) => (a.grade > b.grade ? 1 : -1)))
// Alexia Vasiliki Georgia