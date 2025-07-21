// serie fibonacci
// 0,1,1,2,3,5,8,13,21,34,....

function fibonacciR(n) {
function generaddor(a, b) {
    if (a > n) return
    console.log(a)
    generaddor(b, a + b)
}

generaddor(0, 1)
}

const start = performance.now();
fibonacciR(1000000);
const end = performance.now();

console.log("Tiempo de ejecución:", end - start);



function fibonacciIterativa(n) {
  let a = 0;
  let b = 1;

  for (; a <= n; ) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

const inicio = performance.now();
fibonacciIterativa(1000000);
const fin = performance.now();

console.log("Tiempo de ejecución:", fin - inicio );


