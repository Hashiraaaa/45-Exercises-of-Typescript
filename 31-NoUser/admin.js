"use strict";
let userName = ["Hashir", "Shoaib", "Admin", "Arsalan", "Sultan"];
userName = [];
if (userName.length === 0) {
    console.log("Your array is empty, We need to find some users.");
}
else {
    userName.forEach(adminName => {
        if (adminName === "Admin") {
            console.log(`Hello ${adminName}, Would you like to see status report?`);
        }
        else {
            console.log(`Hello ${adminName}, THankyou for logging in again.`);
        }
    });
}
