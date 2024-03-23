"use strict";
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`You selected ${size} size with "${message}" printed on it.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love shirts.");
