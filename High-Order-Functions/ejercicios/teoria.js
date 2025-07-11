function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}

const multiplicarPor3 = crearMultiplicador(3);

console.log(multiplicarPor3); // [Function (anonymous)]

console.log(multiplicarPor3(4)); // 12
