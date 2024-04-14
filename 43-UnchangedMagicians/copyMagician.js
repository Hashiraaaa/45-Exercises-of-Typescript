"use strict";
let magiciansName = ["Hashir Danger", "Shoaib Mashar", "Younus Khatra", "Sultan Babu"];
function showMagicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function makeGreat(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//making a copy of orginal array through slice () fn.
let copyMagicianName = magiciansName.slice();
// modify the copied array to include "The Great" with their names
let copyGreatMagicians = makeGreat(copyMagicianName);
//Show both arrays original and copied
showMagicians(magiciansName);
showMagicians(copyGreatMagicians);
