//Original Guests list
let guestList= ["Arsalaan","Shoaib","Sultan","Asad"];

//Inviting them for dinner.
guestList.forEach(guests => console.log(`Hello Mr ${guests}\nI am inviting you for a dinner\nThank You.\n`)); 

//This particular guest is not coming
let notCome=guestList[0];
console.log(`Mr ${notCome} is not joining us for the dinner.Replacing him Ms. Fabiha\n`);

//replacing that guest with another guest
guestList.splice(0, 1, "Fabiha");

console.log("Good news guyz, we have found an extra table for dinner.So I am inviting 3 more guests.\n");

//Adding one more guest at the beginning of the list
guestList.unshift("Ayesha");

//Adding one guest at the end of the list
guestList.push("Younus");

//getting the value of middle index of the list
let midGuest=Math.floor(guestList.length / 2);

//adding another guest in the middle of the list
guestList.splice(midGuest, 0, "Rafia");


for(let i=0; i<guestList.length; i++){
    console.log(`Hello Dear ${guestList[i]}\n I am inviting you for a dinner.\n\tThankyou.\n`);
} 

console.log("Guyzz, I have just found out that the dinner table won't arrive on time, so I have got place for only two guests.\n");

//Removing guests from the list and the last two remains
while(guestList.length > 2){
    let removedGuests = guestList.pop();
    console.log(`Sorry Dear ${removedGuests}, I can't invite to have dinner.\n`);
}

//The rest of the guests are being invited
for(let j=0; j < guestList.length; j++){
    console.log(`Luckily, Dear ${guestList[j]}, You are still invited for the dinner.\n`);
}

//Now removing the remaining guests from the list as well
guestList.splice(0,2);

//Printing the empty guest list
console.log("The 2 remaining guests are also removed from the list.\nThe empty list: "+ guestList);

