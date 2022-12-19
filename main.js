"use strict";

var a = (function(){return 1})()

setTimeout(function(){a++},1000)

console.log(a) // 1, NOT 2

// JS runs on 1 thread, but can start on a new thread if needed