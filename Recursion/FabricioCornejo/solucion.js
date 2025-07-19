// serie fibonacci
// 0,1,1,2,3,5,8,13,21,34,....
let a = 0;
let b = 1;
function fibonacciR(n) {
    if (a>n){
        return;
    }
    console.log(a);
    let temp = a;
    a = b;
    b = temp+a;

    fibonacciR(n)
    
}
const inicio = performance.now();
fibonacciR(1000000);
const fin = performance.now();
console.log(`Fibonacci con Recursividad: ${fin-inicio}`);

//sin reursividad
function fibonacci(n){
    a = 0;
    b = 1;
    let fibo = 0;
    while(a < n) {   
        console.log(a);
        fibo = a+b;
        a = b;
        b = fibo;
    }
}
const inicio2 = performance.now();
fibonacci(1000000);
const fin2 = performance.now();
console.log(`Fibonacci sin Recursividad: ${fin2-inicio2}`); //ESTA GANA... Interesante