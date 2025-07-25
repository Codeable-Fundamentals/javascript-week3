// que es una promesa en JavaScript
// El 'objeto Promise' representa la eventual finalización (o falla) de una
//  'operación asincrónica' y su valor resultante.
// Una promesa puede estar en uno de estos estados:
// - Pendiente (pending): Estado inicial, ni cumplida ni rechazada.
// - Cumplida (fulfilled): La operación se completó con éxito.
// - Rechazada (rejected): La operación falló.

const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Simulando una operación exitosa
    resolve({
      message: "¡Operación exitosa!",
      status: 200,
    });

    // Si hubiera un error, podríamos usar reject
    reject(new Error("Algo salió mal"));
  }, 2000); // Espera 2 segundos antes de resolver la promesa
});

console.log("Esperando la promesa...");

console.log(myFirstPromise);

// setTimeout(() => {
//   console.log(myFirstPromise);
// }, 1000);
myFirstPromise
  .then((result) => {
    console.log(result); // Imprime "¡Operación exitosa!" después de 2 segundos
  })
  .catch((error) => {
    console.error("Error:", error);
  });
