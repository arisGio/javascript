"use strict";

const student = {
    name: 'Alex Alexiou',
    grade: 10,
    courses: ['CS', 'Math'],
    teacher: {
        name: 'Vasilis Vasileiou',
        course: 'CS'
    }
}

console.log(student) // grade: 10 exists

delete student.grade

console.log(student) // grade: 10 does not exist