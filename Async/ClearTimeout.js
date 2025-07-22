function saludar(nombre = "mundo") {
  console.log("Hola " + nombre);
}

const timerId = setTimeout(() => saludar("Codeable"), 6000);

clearTimeout(timerId);
