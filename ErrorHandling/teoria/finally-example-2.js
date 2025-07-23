function realizarTrabajo() {
  try {
    console.log("Empezar trabajo peligroso");

    // Imagina que algo sale mal
    throw new Error("¡Se cortó el cable incorrecto!");
  } catch (error) {
    console.log("Manejo el error:", error.message);
  }

  console.log("Finalizar trabajo peligroso");
}

realizarTrabajo();

console.log("------------------------");
function realizarTrabajo2() {
  try {
    console.log("Empezar trabajo peligroso");

    // Imagina que algo sale mal
    throw new Error("¡Se cortó el cable incorrecto!");
  } catch (error) {
    console.log("Manejo el error:", error.message);
  } finally {
    console.log("Finalizar trabajo peligroso");
  }
}

realizarTrabajo2();
