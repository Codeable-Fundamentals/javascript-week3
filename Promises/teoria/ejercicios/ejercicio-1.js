// ========================================
// EJEMPLO 1: Promesa básica que se resuelve
// ========================================

function crearPromesaBasica() {
  return new Promise((resolve, reject) => {
    console.log("🔄 Iniciando operación...");

    // Simulamos una operación que tarda 2 segundos
    setTimeout(() => {
      resolve("✅ ¡Operación completada con éxito!");
    }, 2000);
  });
}

// Usando la promesa con .then, .catch y .finally
crearPromesaBasica()
  .then((resultado) => {
    console.log("📝 Resultado:", resultado);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  })
  .finally(() => {
    console.log("🏁 La promesa ha terminado (éxito o error)");
  });
