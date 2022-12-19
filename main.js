"use strict";

const weatherDiv = document.querySelector('#weather')

let weatherResponse = "Please wait..."

weatherDiv.innerText = weatherResponse

function getWeather(){
    return "Today is going to be shiny"
}

weatherResponse = getWeather()

weatherDiv.innerText = weatherResponse