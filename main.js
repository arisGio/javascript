"use strict";

function print_text(){
    let text = this.innerText
    this.innerText = 'You clicked me!'
    setTimeout(function(){
        this.innerText = text
    }.bind(this),3000)
}

document.querySelector('#button-one').addEventListener('click', print_text)

document.querySelector('#button-two').addEventListener('click', print_text)