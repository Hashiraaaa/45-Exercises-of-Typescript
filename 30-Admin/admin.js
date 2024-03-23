"use strict";
let userName = ["Hashir", "Shoaib", "Admin", "Arsalan", "Sultan"];
userName.forEach(adminName => {
    if (adminName === "Admin") {
        console.log(`Hello ${adminName}, Would you like to see status report?`);
    }
    else {
        console.log(`Hello ${adminName} for logging in again.`);
    }
});
