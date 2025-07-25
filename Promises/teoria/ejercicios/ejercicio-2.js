// ========================================
// EJEMPLO 2: Promesa que puede fallar
// ========================================

function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    console.log(`🔍 Verificando edad: ${edad} años...`);

    setTimeout(() => {
      if (edad >= 18) {
        resolve(`✅ Edad válida: ${edad} años. Acceso permitido.`);
      } else {
        reject(
          `❌ Edad insuficiente: ${edad} años. Necesitas ser mayor de edad.`
        );
      }
    }, 1500);
  });
}

// Ejemplo con edad válida
console.log("--- Probando con edad válida ---");
verificarEdad(25)
  .then((mensaje) => {
    console.log("✨ Éxito:", mensaje);
  })
  .catch((error) => {
    console.log("🚫 Error capturado:", error);
  })
  .finally(() => {
    console.log("🔚 Verificación de edad completada");
  });

// Ejemplo con edad inválida
console.log("\n--- Probando con edad inválida ---");
verificarEdad(16)
  .then((mensaje) => {
    console.log("✨ Éxito:", mensaje);
  })
  .catch((error) => {
    console.log("🚫 Error capturado:", error);
  })
  .finally(() => {
    console.log("🔚 Verificación de edad completada");
  });
