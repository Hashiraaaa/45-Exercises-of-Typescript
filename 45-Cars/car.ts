function create_car(manufacturer, model, ...options){
    let car = {
        manufacturer : manufacturer,
        model : model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
        }
    );

    return car;
}

let myCar =create_car("Toyota", "Corolla", "Color : Black", "Sunroof : True", "Year : 2024");

//Printing the variable to ensure all the information is stored correctly in the car object.

console.log(myCar);