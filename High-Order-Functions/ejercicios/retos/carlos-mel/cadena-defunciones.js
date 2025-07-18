// Ejercicio 3: Cadena de Funciones (filter + map + reduce)
// Dado un array de números, filtra los números impares, multiplica cada uno por 2, y luego suma todos los resultados.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Tu código aquí

// Función de orden superior para procesar números impares
function procesarNumerosImpares(arrayNumeros) {
  return arrayNumeros
    .filter((numero) => {
      // Filtro solo los números impares
      return numero % 2 !== 0;
    })
    .map((numero) => {
      // Multiplico cada número impar por 2
      return numero * 2;
    })
    .reduce((suma, numero) => {
      // Sumo todos los números resultantes
      return suma + numero;
    }, 0); // Empiezo la suma desde 0
}

// Ejecutar la función
const resultado = procesarNumerosImpares(numeros);

// Pruebas y resultados
console.log("=== PRUEBAS DEL EJERCICIO ===");
console.log("");

console.log("📦 Números originales:");
console.log(numeros);
console.log("");

console.log("🔧 Ejecutando función procesarNumerosImpares...");
console.log("Resultado final:", resultado);
console.log("");

console.log("📊 Análisis paso a paso:");
console.log(
  "Paso 1 - Filtrar impares:",
  numeros.filter((numero) => numero % 2 !== 0)
);
console.log(
  "Paso 2 - Multiplicar por 2:",
  numeros.filter((numero) => numero % 2 !== 0).map((numero) => numero * 2)
);
console.log(
  "Paso 3 - Sumar todos:",
  numeros
    .filter((numero) => numero % 2 !== 0)
    .map((numero) => numero * 2)
    .reduce((suma, numero) => suma + numero, 0)
);
console.log("");

console.log("🧮 Cálculo manual:");
console.log("Impares: 1, 3, 5, 7, 9");
console.log("Multiplicados por 2: 2, 6, 10, 14, 18");
console.log("Suma: 2 + 6 + 10 + 14 + 18 = 50");
console.log("");

console.log("✅ ¡Función ejecutada correctamente!");
