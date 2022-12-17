"use strict";

const student = {
    firstname: 'Alex',
    lastname: 'Alexiou',
    age: 22,
    courses: ['Computer science', 'Math'],
    teacher: {
        name: 'Vasilis Vasileiou',
        course: 'Math'
    },
    fullname: function(){
        return `${firstname} ${lastname}`
    }
}

console.log(student.firstname) // Alex
console.log(student.age) // 22