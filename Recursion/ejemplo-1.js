// ¿que es un factorial?
// El factorial de un número n (n!) es el producto de todos los números enteros
// positivos desde 1 hasta n. Por ejemplo, el factorial de 5 (5!)
// es 5 * 4 * 3 * 2 * 1 = 120

function factorial_sin_recursion(numero) {
  let respuesta = 1;

  while (numero > 1) {
    respuesta *= numero;
    numero--;
  }

  return respuesta;
}

// console.log(factorial_sin_recursion(3)); //6
// console.log(factorial_sin_recursion(5)); //120
// console.log(factorial_sin_recursion(10)); //3628800
const time1_t1_I = performance.now();
let test = factorial_con_recursion(1000);
const time1_t1_F = performance.now();

console.log("sin recursividad: ", time1_t1_F - time1_t1_I);
// console.time(test)
// console.timeEnd(test)

console.log("--------- funcion recursiva factorial -----------");

function factorial_con_recursion(numero) {
  if (numero === 0) {
    return 1;
  }

  return numero * factorial_con_recursion(numero - 1);
}

// console.log(factorial_con_recursion(3)); //6
// console.log(factorial_con_recursion(5)); //120
// console.log(factorial_con_recursion(10)); //3628800
const time2_t2_I = performance.now();
let test2 = factorial_con_recursion(1000);
const time2_t2_F = performance.now();
console.log("con recursividad: ", time2_t2_F - time2_t2_I);
// console.time(test2);
// console.timeEnd(test2);
