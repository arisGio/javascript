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

console.log('grade' in student) // true

delete student.grade

console.log('grade' in student) // false