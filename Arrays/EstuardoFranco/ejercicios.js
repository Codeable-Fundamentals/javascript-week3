// Ejercicio 9
// Desarrolla una función que recibe un conjunto de cadenas y devuelva la palabra más larga.

function encontrarPalabraMasLarga(array) {
  // tu código aquí
  const arr1 = array.map(palabra => palabra.length);
  const arrOrdenado = arr1.sort((a, b) => a - b);
  const palabraMasGrande = arrOrdenado[arr1.length-1];
  console.log(palabraMasGrande);
  return palabraMasGrande;
}
 
console.log(encontrarPalabraMasLarga(["elefante", "gato", "mariposa", "tigre"])); // "elefante"