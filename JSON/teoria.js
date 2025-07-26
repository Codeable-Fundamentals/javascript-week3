// JSON:
// JavaScript Object Notation

// ¿Que es ?
// es un formato , para intercamabair datos
// lo identificamos por que sus files , terminan en la extension .json

const escuela = {
  nombre: "Codeable",
  fundacion: 2019
}
 
console.log("Escuela: " + escuela); // Escuela: [object Object]
console.log("Escuela: " + escuela.nombre); // Escuela: [object Object]
console.log("Escuela: " + escuela.fundacion); // Escuela: [object Object]

console.log("Antes del JSON.stringify: ", typeof escuela)
const test = JSON.stringify(escuela)
console.log("que hace JSON.stringify ?: ",test )
console.log("que hace JSON.stringify ?: ",typeof test )

const test_2 = JSON.parse(test)
console.log("que hace JSON.parse ?: ",test_2 )
console.log("que hace JSON.parse ?: ",typeof test_2 )