"use strict";

let x = 51;

while ( x < 50 ) { // never entering
    console.log(x); // nothing
    x++;
}

do { // runs at least once
    console.log(x); // 51
    x++;
} while (x < 50)