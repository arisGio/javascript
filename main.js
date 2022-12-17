"use strict";

let dom = document.querySelector('h1')

dom.addEventListener('click', function(){
    alert('You clicked me!')
})

console.log(dom)

// NB: the first h1 when clicked alerts & not the other one
// i.e. dom has been assigned the first h1 from the querySelector()