"use strict";

console.log(this) // Window, root object of browser

function print_text(){
    console.log(this.innerText)
}

document.querySelector('#button-one').addEventListener('click', print_text)

document.querySelector('#button-two').addEventListener('click', print_text)

// works same as before with the anonymous callback functions

// 'this' changes without us realizing it, so we get bugs