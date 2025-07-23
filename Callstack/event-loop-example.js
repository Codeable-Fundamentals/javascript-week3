// Ejemplo de jerarquía
console.log('1'); // Síncrono - inmediato

setTimeout(() => console.log('2'), 0); // Macrotask

Promise.resolve().then(() => console.log('3')); // Microtask

setTimeout(() => console.log('4'), 0); // Macrotask

Promise.resolve().then(() => console.log('5')); // Microtask

console.log('6'); // Síncrono - inmediato

// Output: 1, 6, 3, 5, 2, 4