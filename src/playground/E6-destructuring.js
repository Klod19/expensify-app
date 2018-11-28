//
// E6 Object Destructuting
//

const person = {
    name: "Pete",
    age: 18,
    location: {
        city: "Dumbfuckville",
        temp: 20
    }
}

// I can destructure, so I can write easiter code;
// add a dafault value: if the matching key doesn't exist in the object, the return value will be shown
// and rename the local variable: name to firstName; I can also set a default value
const { name: firstName = "Anonymous", age} = person
console.log( `${firstName} is ${age}`);

// access the location via destructuring
// and rename local variable: temp to temperature;
const{ city, temp: temperature = 22} = person.location;
// check if city and temp actually exist
if (city && temperature) {
    console.log(`Today in ${city} the temperature is ${temperature}°C`);       
}


const book = {
    title: "Von Unaussprechlichen Kulten",
    author: "Friedrich Wilhelm von Junzt",
    publisher: {
       // name: "Arkham University Press"
    }
}

const{title, author} = book;
const {name : publisherName = "Self Published"} = book.publisher;
console.log(`Book: ${title} Author: ${author} Publisher: ${publisherName}`);



//
// E6 Array Destructuring
//

const address = ["123 Fake Street", "Springfield", "Simpson State", "10407"];

// I can do the following to get the elemnts I want; I leave an empty space for what I don't want
// if I want only city and state:
const [, current_city, state] = address;

console.log(`You are in ${current_city}, ${state}`);

// I can also set default values
// here I go through an empty array; it finds no values, then finds a default one
const address1 = [];

const [, , myState = "New JERKsey"] = address1;

console.log(`You are in ${myState}`);


//given an array
const item = ["Coffee (hot)", "2.00", "2.50", "2.75"]
// grab the first and third array items using array destructuring
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);