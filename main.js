"use strict";

const student = {
    firstname: 'Alex',
    lastname: 'Alexiou',
    age: 22,
    courses: ['Computer science', 'Math'],
    teacher: {
        name: 'Vasilis Vasileiou',
        course: 'Math'
    }
}

const arr = []

for (let idx in student){
    arr.push(student[idx])
}

console.log(arr) // array with values from student object