// ¿que es una promesa?
// es un objeto que representa la ejecucion fallida o exitosa de una operacion asincrona en JS

// Ejemplo de una promesa, cuando todo sale bien
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!!!!!!!!"), 1000);
});

// ejemplod de una promesa que salio mal
let promise_error = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("algo salio mal :c ")), 1000);
});

console.log(promise);
console.log(promise.status);
console.log(promise.__proto__);
console.log(Object.getPrototypeOf(promise));

console.log(promise.result);

promise.then(
  function (result) {
    /*Caso exito */
    console.log("Resultado de la promesa: ", result);
  },
  function (error) {
    /* Caso rechazo */
    console.log("Resultado erroneo de la promesa: ", error);
  }
);

promise_error.then(
  function (result) {
    console.log("Resultado exitoso: ", result);
  },
  function (error) {
    console.log("Resultado erroneo: ", error);
  }
);
