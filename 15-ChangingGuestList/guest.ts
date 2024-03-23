let guestList= ["Arsalan","Shoaib","Sultan","Asad"];
guestList.forEach(trans => console.log(`Respected Dear ${trans}\nI would like to you on a dinner.\n\n \tThank You.\n`));

let notComing=guestList[0];
console.log(`Unfortunatley Mr. ${notComing} is not coming to join us so.\n`);

guestList.splice(0,1,"Saad Afridi");
guestList.forEach(trans => console.log(`Respected Dear ${trans}\nI would like to you on a dinner.\n\n \tThank You.\n`));