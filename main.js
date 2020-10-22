var length = 16;
var lastName= "Johnson";

var cars=["Saab", "Volvo", "BWM"];

var person = {
    firstName: "John",
    lastNamae: "Doe",
    address: {
        street: "ul. Preslav",
        number: 21,
    },
    pets: ["cat","dog"]
}

function getPersonPets(person) {
    for (var i=0; i<person.pets.length; i++)
    console.log(person.pets[i]);
}

for(var i=0; i<cars.length; i++) {
    console.log(cars[i]);
}

for(var k in person) {
    console.log(person[k]);
}
debugger