console.log(" **Ejercicio 2**");

// Desarrolla una función que reciba un array y devuelva un nuevo array con los tres primeros elementos.

function obtenerPrimerosTres(array) {
  return array.slice(0, 3);
}
console.log(obtenerPrimerosTres(["a", "b", "c", "d", "e"])); // ["a", "b", "c"]

console.log("----------------------");

console.log(" **Ejercicio 3**");

// Desarrolla una función que reciba un array y devuelva el primer número par.
function encontrarPrimerPar(array) {
  return array.find((num) => num % 2 === 0);
}
console.log(encontrarPrimerPar([7, 9, 12, 15, 20])); // 12

console.log("----------------------");

console.log(" **Ejercicio 4**");

// Desarrolla una funcion que reciba un array y un numero, y que me devuelva el mismo array filtrado, con los elementos que son mayores al numero pasado.
function filtrarMayoresQue(array, num) {
  return array.filter((elemento) => elemento > num);
}
const itemsMayoresQue10 = filtrarMayoresQue([5, 12, 18, 3, 20], 10);
console.log(itemsMayoresQue10); // [12, 18, 20]

console.log("----------------------");

console.log(" **Ejercicio 5**");

// Desarrolla una función que reciba un array de nombres y devuelva un string, que representa una lista no ordenada html, que enlista todos los nombres, cada uno envuelto en un <li>:
function generarListaHtml(nombres) {
  const items = nombres.map((nombre) => `<li>${nombre}</li>`).join("");
  return `<ul>${items}</ul>`;
}
console.log(generarListaHtml(["Ana", "Luis", "Carlos", "María"]));
// "<ul><li>Ana</li><li>Luis</li><li>Carlos</li><li>María</li></ul>"
console.log("----------------------");

console.log(" **Ejercicio 6**");

// Desarrolla una función que reciba un array de números y devuelva la suma total de los elementos.
function sumarElementos(array) {
  return array.reduce((suma, elemento) => suma + elemento, 0);
}
console.log(sumarElementos([4, 7, 10, 25])); // 46
console.log("----------------------");

console.log(" **Ejercicio 7**");

// Desarrolla una función que reciba un array de números y los ordene de mayor a menor.
function ordenarDescendente(array) {
  return array.sort((a, b) => b - a);
}
console.log(ordenarDescendente([50, 10, 30, 5, 80, 1])); // [80, 50, 30, 10, 5, 1]

console.log("----------------------");

console.log(" **Ejercicio 8**");

// Desarrolla una función que reciba un array de nombres y devuelva un objeto con el conteo de cada nombre.
function contarNombres(array) {
  return array.reduce((contador, nombre) => {
    contador[nombre] = (contador[nombre] || 0) + 1;
    return contador;
  }, {});
}
console.log(contarNombres(["Ana", "Luis", "Ana", "Carlos", "Luis", "Ana"]));
// { Ana: 3, Luis: 2, Carlos: 1 }
console.log("----------------------");

console.log(" **Ejercicio 9**");

// Desarrolla una función que reciba un array de strings y devuelva la palabra más larga.
function encontrarPalabraMasLarga(array) {
  return array.reduce((palabraMasLarga, palabraActual) => {
    return palabraActual.length > palabraMasLarga.length
      ? palabraActual
      : palabraMasLarga;
  });
}
console.log(
  encontrarPalabraMasLarga(["elefante", "gato", "mariposa", "tigre"])
); // "elefante"
