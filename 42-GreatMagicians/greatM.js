"use strict";
let magiciansName = ["Hashir Danger", "Shoaib Mashar", "Younus Khatra", "Sultan Babu"];
function showMagicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function makeGreat(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let greatMagicians = makeGreat(magiciansName);
showMagicians(greatMagicians);
