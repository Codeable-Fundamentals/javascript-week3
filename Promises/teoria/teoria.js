// ¿que es una promesa?
// es un objeto que representa la ejecucion fallida o exitosa de una operacion asincrona en JS

// Ejemplo de una promesa, cuando todo sale bien
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

// ejemplod de una promesa que salio mal
let promise_error = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("algo salio mal :c ")), 1000);
});
