// ejercicio 1
function agregarComidaRapida(array) {
  // tu código aquí
  array.unshift("🍕");
  array.push("🍔");

  return array;
}
 
console.log(agregarComidaRapida(["🌭", "🍟"])); // ["🍕", "🌭", "🍟", "🍔"]

// Ejercicio 2 :
function obtenerPrimerosTres(array){
    return array.slice(0,3)
}


console.log(obtenerPrimerosTres(["a", "b", "c", "d", "e"]));

// ejercicio 3 : 
function encontrarPrimerPar(array) {
    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      return array[i];
    }
  }
  return null; // Si no hay ningún número par
}

console.log([7, 9, 12, 15, 20])

// Ejercicio 4 :
function filtrarMayoresQue(array, num) {
	// tu codigo aqui
}
 
const itemsMayoresQue10 = filtrarMayoresQue([5, 12, 18, 3, 20], 10);
console.log(itemsMayoresQue10) // [12, 18, 20]

console.log()

// ejercicio 5 : 
// codigo aqui 
console.log("-----------------")

// Ejercicio 6 :
// codigo aqui 

console.log("-----------------")

// ejercicio 7 : 
// codigo aqui 
console.log("-----------------")

// Ejercicio 8 :
// codigo aqui 

console.log("-----------------")

// ejercicio 9 : 
// codigo aqui 
console.log("-----------------")