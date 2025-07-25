// ¿que es una promesa?
// es un objeto que representa la ejecucion fallida o exitosa de una operacion asincrona en JS

// Ejemplo de una promesa, cuando todo sale bien
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

