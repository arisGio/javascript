"use strict";

console.log(this) // Window

function print_text(){
    console.log(this)
}

document.querySelector('#button-one').addEventListener('click', print_text) // <button>One... (on click)

document.querySelector('#button-two').addEventListener('click', print_text) // <button>Two... (on click)

// so every time this get's another value
// in detail this becomes the object which we are refering to