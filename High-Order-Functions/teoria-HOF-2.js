// que una HOF es aquella que deveulva o retorna otra funcion.

function saludar() {
  const hola = () => "hola soy Grecia!";

  return hola;
}

const res = saludar();

console.log("Sin (): ",res)
console.log("Con (): ",res())
console.log(saludar()())