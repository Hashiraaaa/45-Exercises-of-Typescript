"use strict";
let animals = ["Horse", "Cow", "Squarrel"];
for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]}`);
}
for (let i = 0; i < animals.length; i++) {
    if (animals[i] == "Horse") {
        console.log(`${animals[i]} is very fast animal.`);
    }
    else if (animals[i] == "Cow") {
        console.log(`${animals[i]} is a domestic animal.`);
    }
    else if (animals[i] == "Squarrel") {
        console.log(`${animals[i]} is a very sweet animal.`);
    }
}
console.log("\n Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!");
