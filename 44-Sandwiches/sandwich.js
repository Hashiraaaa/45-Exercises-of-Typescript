"use strict";
//function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...itmes) {
    console.log("\nMaking a sandwich with the followign items: \n");
    itmes.forEach(singleItem => console.log("- " + singleItem));
    console.log("\nNow enjoy your Sandwich!!");
}
//calling the functions 3 times with 3 different arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Ketchup", "Egg");
makeSandwich("Bread", "Butter");
