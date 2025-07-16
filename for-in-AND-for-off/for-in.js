// MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// Examples in array :
let arr_names = ["Pepe", "Carmen", "Luis", "Lalo", "Lucia"];

for (const name in arr_names) {
  console.log("NAME: ", name);
  console.log("ARRAY_NAME[NAME]: ", arr_names[name]);
}

console.log("---------------------------");

// Examples in String
let long_string = "egfuryfweuytfgbkjnjioqwhuieygeuirhwelkrpwkohiuqwgyhtwdhyjgdyjgdjyug";
for (const char in long_string) {
  console.log("char: ", char);
  console.log("LONG_STRING[CHAR]: ", long_string[char]);
}

console.log("---------------------------");

// Examples maps (Objetos)
let developer = {
  name: "Grecia",
  preferred_language: "JavaScript",
  age: 25,
  country: "Peru",
  age_of_experience: 5,
  is_active: true,
  company: "Google"
};

for (const key in developer) {
  console.log("key: ", key);
  console.log("DEVELOPER[KEY]: ", developer[key]);
}
