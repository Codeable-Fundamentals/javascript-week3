// palabra plindroma
// una plabra palindroma es aquella que se puede leer tanto al inverva como al derecho

// madam
// Oso
// Otto
// radar
// hannah

// crear una funcion que devuelva true o false , para saber si una palabra es palindroma

// isPalindrom("Oso") // true
// isPalindrom("gRECIA") // false

// codigo a agregar - Carlos
// const palabraTransformada = palabra.toLowerCase().replace(/[^a-z0-9]/gi, '');

const verificarPalindromo = (transformacion) => {
  return (palabra) => {
    const palabraTransformada = transformacion(palabra);

    const palabraInvertida = palabraTransformada.split("").reverse().join("");

    return palabraTransformada === palabraInvertida;
  };
};

// Transformaciones
const aMinusculas = (palabra) => palabra.toLowerCase();

const isPalindrom = verificarPalindromo(aMinusculas);

console.log("Es palíndromo :", "madam", isPalindrom("madam")); // true
console.log("Es palíndromo :", "Oso", isPalindrom("Oso")); //true
console.log("Es palíndromo :", "Otto", isPalindrom("Otto")); //true
console.log("Es palíndromo :", "radar", isPalindrom("radar")); // true
console.log("Es palíndromo :", "hannah", isPalindrom("hannah")); // true
console.log("Es palíndromo :", "gRECIA", isPalindrom("gRECIA")); //false
