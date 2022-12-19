"use strict";

const a = [1, 2, 634, 3, 1, 12, 6, 34]

console.log(a.sort((a,b) => (a > b ? 1 : -1)))
// [1, 1, 2, 3, 6, 12, 34, 634]