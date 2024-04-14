function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var myCar = create_car("Toyota", "Corolla", "Color : Black", "Sunroof : True", "Year : 2024");
//Printing the variable to ensure all the information is stored correctly in the car object.
console.log(myCar);
