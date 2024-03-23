let namePerson="Hashir";
console.log("lower-case: ",namePerson.toLowerCase());

console.log("UPPER-CASE: ",namePerson.toUpperCase());

console.log("Title-Case: ",namePerson.replace(/\bw/g,c=>c.toUpperCase()));