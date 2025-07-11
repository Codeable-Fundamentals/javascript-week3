// Esta es la HOF , por que recibe como parametro una funcion
function ejecutar(fn) {
  fn();
}

// es uan funciona "normal" , esta escrita de la forma declarativa , es decir de la forma mas tradicional
function saludar() {
  console.log("Hola desde aqui adentro!");
}

ejecutar(saludar);

console.log("------------ Otros Ejemplos: ------------");

// esta funcion llamada "operar", seria nuetra HOF , o FUNCION DE ORDEN SUPERIRO
function operar(a, b, fn) {
  const resp = fn(a, b);
  return resp;
}

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const op1 = operar(2, 4, multiplicar); // resp: 8
const op2 = operar(2, 4, sumar); // resp: 6
const op3 = operar(8, 2, restar); // resp: 6

console.log(op1);
console.log(op2);
console.log(op3);

console.log("------------ Otros Ejemplos: ------------");

function clima(temperatura, fn) {
  return fn(temperatura);
}

const verano = (temp) => {
  if (temp >= 28) {
    return "es verano!";
  }
  return "no es verano";
};

const invierno = (temp) => {
  if (temp <= 10) {
    return "es invierno";
  }
  return "no es invierno";
};

const primavera = (temp) => {
  if (temp > 10 && temp < 28) {
    return "es primavera";
  }
  return "no es primavera";
};

console.log(clima(12, verano));
