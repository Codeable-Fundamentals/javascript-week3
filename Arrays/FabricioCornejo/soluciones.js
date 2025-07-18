//Ejercicio 1
function agregarComidaRapida(array) {
  array.unshift("🍕");
  array.push("🍔");
  return array;
}
console.log(agregarComidaRapida(["🌭", "🍟"])); // ["🍕", "🌭", "🍟", "🍔"]

//Ejercicio 2
console.log("---------Ejercicio 2 -----------")

function obtenerPrimerosTres(array) {
    let cont = 0; 
    let array2 = []
    do{
        array2.push(array[cont])
        cont++;
    } while (cont<3)
    return array2;
}
console.log(obtenerPrimerosTres(["grecia", "luis", "v", "a", "b", "c", "d", "e"])); // ["a", "b", "c"]

//Ejercicio 3
console.log("---------Ejercicio 3 -----------")
function encontrarPrimerPar(array) {
  for (let i in array){
    if (array[i]%2===0){
        return array[i];
    }
  }
}
console.log(encontrarPrimerPar([7, 9, 12, 15, 20])); // 12

//Ejercicio 4
function filtrarMayoresQue(array, num) {
    let  array3 = [];
	for (let i in array){
        if (array[i] > 10){
            array3.push(array[i]);
        }
    }
    return array3;
}
const itemsMayoresQue10 = filtrarMayoresQue([5, 12, 18, 3, 20], 10);
console.log(itemsMayoresQue10) // [12, 18, 20]

//Ejercicio 5
function generarListaHtml(nombres) {
    let cadenaFinal = "<ul>";
    for (let i in nombres){
        cadenaFinal = cadenaFinal+"<li>"+nombres[i]+"</li>";
    }
    cadenaFinal= cadenaFinal+"</ul>"
    return cadenaFinal;
}
console.log(generarListaHtml(["Ana", "Luis", "Carlos", "María"]));
// "<ul><li>Ana</li><li>Luis</li><li>Carlos</li><li>María</li></ul>"

//Ejercicio 6
function sumarElementos(array) {
    let suma = 0;
    for (let i in array){
        suma += array[i];
    }
    return suma;
}
console.log(sumarElementos([4, 7, 10, 25])); // 46

console.log("-------Ejercicio 7-------")
//Ejercicio 7
function ordenarDescendente(array) {
    array.sort();
    array.reverse();
    return array;
}
console.log(ordenarDescendente([50, 100, 10, 30, 5, 80, 1])); // [100, 80, 50, 30, 10, 5, 1]

//Ejercicio 8
function contarNombres(array) {
  let nombresCont = { }
  for (let i of array){
    if (nombresCont[i]){
        nombresCont[i]++;
        console.log(nombresCont);
    } else {
        nombresCont[i] = 1;
        console.log(nombresCont);
    }
  }
  return nombresCont
}
console.log(contarNombres(["Ana", "Luis", "Ana", "Carlos", "Luis", "Ana"]));
// { Ana: 3, Luis: 2, Carlos: 1 }

console.log("---------Ejercicio 9 -----------")
//Ejercicio9
function encontrarPalabraMasLarga(array) {
  let medida = 0
  let grande = "";
  for (let i in array){
    if (array[i].length>medida){
        medida = array[i].length;
        grande = array[i];
    }
  }
  return grande;
}
console.log(encontrarPalabraMasLarga(["elefante", "gato", "mariposa", "tigre", "murcielago"])); // "elefante"