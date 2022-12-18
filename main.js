"use strict";

console.log(this)

function print_text(){
    let text = this.innerText
    this.innerText = 'You clicked me!'
    console.log(this)           // <button>...
    setTimeout(function(){
        console.log(this)       // Window
        this.innerText = text
    },3000)
}

document.querySelector('#button-one').addEventListener('click', print_text)

document.querySelector('#button-two').addEventListener('click', print_text)