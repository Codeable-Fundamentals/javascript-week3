// Ejercicio de la Receta: EJEMPLO

function Receta(titulo, ingredientes, instrucciones) {
  // completar
  this.titulo = titulo;
  this.ingredientes = ingredientes;
  this.instrucciones = instrucciones;
}

// Receta.prototype... (completar)
Receta.prototype.mostrarReceta = function () {
  return `Título de la receta: ${this.titulo}\nIngredientes: ${this.ingredientes}\nInstrucciones: ${this.instrucciones}`;
};

Receta.prototype.cambiarTitulo = function (nuevoTitulo) {
  this.titulo = nuevoTitulo;
  return this.titulo;

};

Receta.prototype.añadirIngrediente = function (nuevoIngrediente) {
  this.ingredientes += `, ${nuevoIngrediente}`;
  return this.ingredientes;
  
};

Receta.prototype.editarInstrucciones = function (nuevasInstrucciones) {
  this.instrucciones = nuevasInstrucciones;
  return this.instrucciones;
};

const pastelDeChocolate = new Receta(
  "Pastel de Chocolate",
  "Harina, Chocolate, Azúcar, Huevos",
  "Mezclar ingredientes y hornear a 180°C por 30 minutos."
);

// (**) punto de control para diagrama VV

console.log(pastelDeChocolate.mostrarReceta());
// Debería imprimir:
// Título de la receta: Pastel de Chocolate
// Ingredientes: Harina, Chocolate, Azúcar, Huevos
// Instrucciones: Mezclar ingredientes y hornear a 180°C por 30 minutos.

pastelDeChocolate.cambiarTitulo("Super Pastel de Chocolate");
pastelDeChocolate.añadirIngrediente("Vainilla");
pastelDeChocolate.editarInstrucciones(
  "Mezclar ingredientes, añadir un toque de amor y hornear a 180°C por 35 minutos."
);

console.log(pastelDeChocolate.mostrarReceta());
// Debería imprimir:
// Título de la receta: Super Pastel de Chocolate
// Ingredientes: Harina, Chocolate, Azúcar, Huevos, Vainilla
// Instrucciones: Mezclar ingredientes, añadir un toque de amor y hornear a 180°C por 35 minutos.
