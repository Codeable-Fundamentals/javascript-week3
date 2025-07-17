/*Ejercicio 1
Desarrolla una función que reciba un array y agregue “🍕” al inicio y “🍔” al final.
*/

function agregarComidaRapida(array) {
  array.unshift("🍕");
  array.push("🍔");
  return array;
}
console.log(agregarComidaRapida(["🌭", "🍟"])); // ["🍕", "🌭", "🍟", "🍔"]

/*Ejercicio 2
Desarrolla una función que reciba un array y devuelva un nuevo array con los tres primeros elementos.
*/

function obtenerPrimerosTres(array) {
  return array.slice(0, 3);
}
console.log(obtenerPrimerosTres(["a", "b", "c", "d", "e"])); // ["a", "b", "c"]

/*
Ejercicio 3
Desarrolla una función que reciba un array y devuelva el primer número par.
*/
function encontrarPrimerPar(array) {    
    return array.find(elemento => elemento % 2 === 0) || null;
    }
console.log(encontrarPrimerPar([7, 9, 12, 15, 20])); // 12

/*
Ejercicio 4
Desarrolla una funcion que reciba un array y un numero, y que me devuelva el mismo array filtrado, con los elementos que son mayores al numero pasado.
*/
function filtrarMayoresQue(array, num) {
	return array.filter(elemento => elemento > num);
}
 
const itemsMayoresQue10 = filtrarMayoresQue([5, 12, 18, 3, 20], 10);
console.log(itemsMayoresQue10) // [12, 18, 20]

/*
Ejercicio 6
Desarrolla una función que reciba un array de números y devuelva la suma total de los elementos.
*/
function sumarElementos(array) {
  return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
}
 
console.log(sumarElementos([4, 7, 10, 25])); // 46