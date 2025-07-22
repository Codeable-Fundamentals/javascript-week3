console.log("Este se ejecuta primero")

function saludar(nombre = "mundo") {
  console.log('Hola ' + nombre);
}
 
setTimeout(saludar, 1000); 
