function make_shirt(size : string = "Large", message : string = "I love Typescript"){
    console.log(`You selected ${size} size  shirt with "${message}" printed on it.`);
}

make_shirt();
make_shirt("Medium");
make_shirt("small","I love shirts.");