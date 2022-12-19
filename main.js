"use strict";

const weatherDiv = document.querySelector('#weather')

let weatherResponse = "Please wait..."

weatherDiv.innerText = weatherResponse

function getWeather(){
    return "Today is going to be shiny"
}

setTimeout(() => {weatherResponse = getWeather()}, 2000)

setTimeout(() => {weatherDiv.innerText = weatherResponse}, 3000)

// one command does not wait for the other
// they proceed independently