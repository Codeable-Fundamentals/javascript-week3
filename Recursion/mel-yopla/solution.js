function fibonacciIterativo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let resultado = 0;

  for (let i = 2; i <= n; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
  }

  return resultado;
}

const pruebas = [0, 1, 2, 3, 5, 8, 10, 15];

console.log("=== PRUEBAS DE FIBONACCI ===");
for (let n of pruebas) {
  console.log(`n = ${n}`);
  console.log(`Iterativo: ${fibonacciIterativo(n)}`);
  console.log("--------------------------");
}
