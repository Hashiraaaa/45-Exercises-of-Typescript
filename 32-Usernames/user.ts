let current_users = ["Hashir","Shoaib","Sultan","Arsalan","Asad"];

let new_users = ["Hashir","Sultan","Hamza","Ayesha","Fabiha"];

new_users.forEach(newUser => {
    let newUserLower = newUser.toLowerCase();

    let userNameTake = current_users.some(current_User => current_User.toLocaleLowerCase() === newUserLower);
    
    if(userNameTake){
        console.log(`${newUser}, already existed. Needs to choose a new username.`);

    }else{
        console.log(`${newUser} added to the list.`);

        current_users.push(newUser);
    }
});

console.log(current_users);