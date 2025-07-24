function analizarError() {
  /* Error: TypeError - llamar método en null */
  /* Cuando se intenta usar algo de forma incorrecta */
  try {
    let numero = null;
    numero.toUpperCase(); // TypeError
  } catch (error) {
    console.log("Ejemplo 1 - TypeError");
    console.log("Nombre del error: ", error.name);
    console.log("Mensaje: ", error.message);
    console.log("Stack:\n", error.stack);
  }

  /* Error: ReferenceError */
  /*Cuando se usa una variable no definida */
  try {
    let numero = x; // ReferenceError
  } catch (error) {
    console.log("Ejemplo 2 - ReferenceError");
    console.log("Nombre del error: ", error.name);
    console.log("Mensaje: ", error.message);
    console.log("Stack:\n", error.stack);
  }

  /* Error: RangeError */
  /* Cuando el número esta fuera de un rango aceptable */
  try {
    let arr = new Array(-1); //RanfeError
  } catch (error) {
    console.log("Ejemplo 4 - RangeError");
    console.log("Nombre del error: ", error.name);
    console.log("Mensaje: ", error.message);
    console.log("Stack:\n", error.stack);
  }
}

analizarError();
