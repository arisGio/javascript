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

student.grade = 10;

console.log(JSON.stringify(student)) // {"firstname":"Alex","lastname":"Alexiou","age":22,"courses":["Computer science","Math"],"teacher":{"name":"Vasilis Vasileiou","course":"Math"},"grade":10}