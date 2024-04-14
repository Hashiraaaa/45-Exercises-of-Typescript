let magiciansName = ["Hashir Danger", "Shoaib Mashar", "Younus Khatra", "Sultan Babu"];

function showMagicians(magicians: string []){
    magicians.forEach(name =>  console.log(name));
    
}

function makeGreat(magicians: string []){
      return magicians.map(name => `The Great ${name}`);
}
let greatMagicians = makeGreat(magiciansName);

showMagicians(greatMagicians);

