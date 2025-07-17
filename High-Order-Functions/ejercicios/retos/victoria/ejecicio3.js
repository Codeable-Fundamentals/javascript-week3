// Ejercicio 3: Cadena de Funciones (filter + map + reduce)
// Dado un array de números, filtra los números impares, multiplica cada uno por 2, y luego suma todos los resultados.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Tu código aquí

const resultado = numeros
  .filter(num => num % 2 !== 0)
  .map(num => num * 2)
  .reduce((acumulador, num) => acumulador + num, 0);

console.log(resultado);
// Resultado esperado: 60 (1*2 + 3*2 + 5*2 + 7*2 + 9*2 = 2 + 6 + 10 + 14 + 18 = 60)