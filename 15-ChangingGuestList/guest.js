var guestList = ["Arsalan", "Shoaib", "Sultan", "Asad"];
guestList.forEach(function (trans) { return console.log("Respected Dear ".concat(trans, "\nI would like to you on a dinner.\n\n \tThank You.\n")); });
var notComing = guestList[0];
console.log("Unfortunatley Mr. ".concat(notComing, " is not coming to join us so.\n"));
guestList.splice(0, 1, "Saad Afridi");
guestList.forEach(function (trans) { return console.log("Respected Dear ".concat(trans, "\nI would like to you on a dinner.\n\n \tThank You.\n")); });
