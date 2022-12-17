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

for (let idx in student){
    console.log(idx) // key
    console.log(student[idx]) // value
    console.log('-------------') // visual separator
}

// we cannot use for of loop