function analizarError() {
  try {
    // Provoca diferentes tipos de errores y analízalos
    let numero = null;
    numero.toUpperCase(); // ¿Qué tipo de error es este?
  } catch (error) {
    // Imprime name, message y stack del error
    // Tu código aquí
  }
}

analizarError();