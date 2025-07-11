function ejecutar(fn) {
  fn();
}

function saludar() {
  console.log("Hola desde aqui");
}

ejecutar(saludar);
