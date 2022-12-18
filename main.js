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

let names = students.filter(x => x.grade >= 8).map(x => x.name)

console.log(names) // ['Vasiliki Vasileiou', 'Georgia Georgiou']