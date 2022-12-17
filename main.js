"use strict";

// define the flow of a loop

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue // omit current iteration, continue with the rest iterations
    }
    console.log(i)
}

// continue: commonly used with while loops
let i = 0

while (true) {
    i++;
    if (i == 3) continue;
    if (i > 5) break;
    console.log(i); // 1 2 (3 get's continued) 4 5 (broke out)
}

// if i++ was at the bottom -> infinite loop

// JS is asynchronous: like having threads to do jobs in parallel