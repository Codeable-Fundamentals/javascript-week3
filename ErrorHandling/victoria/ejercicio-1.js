function analizarError() {
  try {
    // Provoca diferentes tipos de errores y analízalos
    // Error de tipo: intentar llamar a un método que no existe
    let objeto = {};
    objeto.metodoInexistente(); // ¿Qué tipo de error es este?
    let numero = null;
    numero.toUpperCase(); // ¿Qué tipo de error es este?
  } catch (error) {
    // Imprime name, message y stack del error
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
  }
}

analizarError();