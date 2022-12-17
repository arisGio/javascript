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
        return `${this.firstname} ${this.lastname}`
    }
}

console.log(student.fullname()) // Alex Alexiou
// use () parentheses, .fullname() to execute the function and not just invoke it, .fullname
console.log(student.teacher) // Vasilis Vasileiou
console.log(student.teacher.course) // Math