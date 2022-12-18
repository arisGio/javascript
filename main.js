"use strict";

const a = [1, 2, 3, 1, 12, 6, 34, 634]

let b = a.filter(x => x**2 > 20)

console.log(b)  // [12, 6, 34, 634]