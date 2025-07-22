console.log("Este se ejecuta primero");

function saludar(nombre = "mundo") {
  console.log("Hola " + nombre + "!!");
}

setTimeout(saludar, 5000, "Grecia");
setTimeout(() => saludar("Diego"), 2000);

console.log("lo que sea... ");

