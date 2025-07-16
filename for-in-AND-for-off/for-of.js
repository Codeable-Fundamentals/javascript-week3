// MDN : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

// Examples in array :

let arr_names = ["Pepe", "Carmen", "Luis", "Lalo", "Lucia"]

for(const name of arr_names){
  console.log("NAME: ", name)
}

// Examples in String
let long_string = "egfuryfweuytfgbkjnjioqwhuieygeuirhwelkrpwkohiuqwgyhtwdhyjgdyjgdjyug"

for(const char of long_string){
  console.log("char: ", char)
}

// Examples maps (Objetos)

const developer = new Map();
developer.set("name", "Grecia");
developer.set("preferred_language", "JavaScript");
developer.set("age", 25);
developer.set("country", "Peru");
developer.set("age_of_experience", 5);
developer.set("is_active", true);
developer.set("company", "Google");

console.log("developer: ", developer);

for(const key of developer){
  console.log("key: ", key)
}

// Exmeplo con Sets
const set_numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 

set_numbers.add({numer: 11, name: "Eleven"});

console.log("set_numbers: ", set_numbers);
for(const number of set_numbers){
  console.log("number: ", number)
}

