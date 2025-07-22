let contador = 0;

// Imprimir e incrementar contador cada 2 segundos
let timerId = setInterval(() => console.log(contador++), 500);

// dejar de contar después de 5 segundos
setTimeout(() => clearInterval(timerId), 10000);
