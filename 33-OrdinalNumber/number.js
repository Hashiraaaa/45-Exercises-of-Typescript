"use strict";
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= 9; i++) {
    if (i == 1) {
        console.log(`${[i]}st`);
    }
    else if (i == 2) {
        console.log(`${[i]}nd`);
    }
    else if (i == 3) {
        console.log(`${[i]}rd`);
    }
    else if (i >= 4 && i <= 9) {
        console.log(`${[i]}th`);
    }
}
