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

const {name, grade, courses, teacher} = student
console.log(name)     // Alex Alexiou
console.log(grade)    // 10
console.log(courses)  // ['CS','Math']
console.log(teacher)  // {name: 'Vasilis Vasileiou', course: 'CS'}