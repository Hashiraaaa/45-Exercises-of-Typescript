"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Pakistan") {
    return console.log(`\n${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
// //Q no. 39 City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_names(city, country) {
    return console.log(`\n"${city}","${country}"`);
}
city_names("Sydney", "Australia");
city_names("Tokyo", "Japan");
city_names("London", "England");
city_names("Dubai", "UAE");
