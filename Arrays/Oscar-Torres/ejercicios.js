function agregarComidaRapida(array) {
    array.unshift("🍕");
    array.push("🍔");
    return array;
}

console.log(agregarComidaRapida(["🌭", "🍟"])); // ["🍕", "🌭", "🍟", "🍔"]

console.log("ejercicio 2")

function obtenerPrimerosTres(array) {
    return array.slice(0, 3); 
}

console.log(obtenerPrimerosTres(["a", "b", "c", "d", "e"])); 

console.log("ejercicio 3")


function encontrarPrimerPar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      return array[i];
    }
  }
}

console.log(encontrarPrimerPar([7, 9, 11, 15, 21])); // 12

console.log("ejercicio 4")

function filtrarMayoresQue(array, num) {
	return array.filter(function(element) {
		return element > num;
	});
}

const itemsMayoresQue10 = filtrarMayoresQue([5, 12, 18, 3, 20], 10);
console.log(itemsMayoresQue10) // [12, 18, 20]

console.log("ejercicio 6")


function sumarElementos(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return suma;
}

 
console.log(sumarElementos([4, 7, 10, 25])); // 46

console.log("ejercicio 8")

function contarNombres(array) {
  const conteo = {};

  

  return conteo;
}


console.log("ejercicio 9")

function encontrarPalabraMasLarga(array) {
  let palabralarga = "";

  for (let palabra of array) {
    if (palabra.length > palabralarga.length) {
      palabralarga = palabra;
    }
  }

  return palabralarga;
}

console.log(encontrarPalabraMasLarga(["elefante", "gato", "mariposa","murcielago", "tigre"])); // "elefante"