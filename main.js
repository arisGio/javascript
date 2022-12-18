"use strict";

function print_text(){
    console.log(this.innerText)
}

document.querySelector('#button-one').addEventListener('click', print_text)

document.querySelector('#button-two').addEventListener('click', print_text)

// works same as before with the anonymous callback functions