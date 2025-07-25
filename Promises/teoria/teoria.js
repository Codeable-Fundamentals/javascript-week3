// ¿que es una promesa?
// es un objeto que representa la ejecucion fallida o exitosa de una operacion asincrona en JS

console.log("----------------- PROMESA EXITOSA -------------")
// Ejemplo de una promesa, cuando todo sale bien
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!!!!!!!!"), 1000);
});

promise.then(
  function (result) {
    /*Caso exito */
    console.log("Resultado bueno: ", result);
  },
  function (error) {
    /* Caso rechazo */
    console.log("Resultado malo: ", error);
  }
);

console.log("----------------- PROMESA ERRONEA -------------")
// ejemplod de una promesa que salio mal
let promise_error = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!"), 1000));
});


promise_error.then(
  function (result) {
    console.log("Resultado bueno: ", result);
  },
  function (error) {
    console.log("Resultado malo: ", error.message);
  }
);



// console.log(promise);
// console.log(promise.status);
// console.log(promise.__proto__);
// console.log(Object.getPrototypeOf(promise));

// console.log(promise.result);