"use strict";

const a = [1, 2, 3, 1, 12, 6, 34, 634]

let b = a.reduce((currentTotal, current) => currentTotal + current, 0)

console.log(b)  // 693