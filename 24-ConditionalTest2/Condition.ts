let naming = "Hashir";
console.log(`1- ${naming=="hashir"}\n\t  ${naming!=="hashir"}`);

let num = 4;
console.log(`2- ${num==4}\n\t${num!==4}\n\t${num>5}\n\t${num<9}\n\t${num <=4}\n\t${num>=5}`);

let num1 = 66;
let num2 = 45;
console.log(`3- ${num1 < 66 && num2 > 45}\n\t ${num1 < 67 || num2 >34}`);

let team = ["batsman","bowler","fielder"];
let naam = "Saad";
console.log(`4- ${Array.isArray(team)}\n\t${Array.isArray(naam)}`);
