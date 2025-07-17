// palabra plindroma 
// una plabra palindroma es aquella que se puede leer tanto al inverva como al derecho 

// madam
// Oso
// Otto
// radar
// hannah

// crear una funcion que devuelva true o false , para saber si una palabra es palindroma

function isPalindrom(palabra) {
  const palabraNormalizada = palabra.toLowerCase();
  const palabraReversa = palabraNormalizada.split("").reverse().join("");
  return palabraNormalizada === palabraReversa;
}

// isPalindrom("Oso") // true
// isPalindrom("gRECIA") // false