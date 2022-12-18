"use strict";

document.querySelector('#button-one').addEventListener('click', function(){
    console.log(this.innerText) // One (on click)
})

document.querySelector('#button-two').addEventListener('click', function(){
    console.log(this.innerText)  // Two (on click)
})