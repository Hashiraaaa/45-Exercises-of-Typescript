//To print names in each line
var Names = ['Hashir', 'Shoaib', 'Arsalan', 'Sultan', 'Asad'];


//To print names along with the same message
var message = "Greetings Everyone...!";
for (var i = 0; i < Names.length; i++) {
    console.log("".concat(Names[i], ": ") + message);
}
