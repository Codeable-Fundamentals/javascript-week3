// ========================================
// EJEMPLO 4: Promesa con lógica más compleja
// ========================================

function procesarArchivo(nombreArchivo) {
  return new Promise((resolve, reject) => {
    console.log(`📁 Procesando archivo: ${nombreArchivo}`);

    setTimeout(() => {
      // Validaciones múltiples
      if (!nombreArchivo) {
        reject("❌ El nombre del archivo no puede estar vacío");
        return;
      }

      if (!nombreArchivo.includes(".")) {
        reject("❌ El archivo debe tener una extensión");
        return;
      }

      const extension = nombreArchivo.split(".").pop().toLowerCase();
      const extensionesPermitidas = ["txt", "pdf", "doc", "jpg", "png"];

      if (!extensionesPermitidas.includes(extension)) {
        reject(`❌ Extensión no permitida: .${extension}`);
        return;
      }

      // Si pasa todas las validaciones
      resolve({
        nombre: nombreArchivo,
        extension: extension,
        tamaño: Math.floor(Math.random() * 1000) + " KB",
        procesado: true,
      });
    }, 1800);
  });
}

// Probando diferentes casos
console.log("\n--- Procesando archivo válido ---");
procesarArchivo("documento.pdf")
  .then((archivo) => {
    console.log("📄 Archivo procesado exitosamente:");
    console.log(`   Nombre: ${archivo.nombre}`);
    console.log(`   Extensión: ${archivo.extension}`);
    console.log(`   Tamaño: ${archivo.tamaño}`);
  })
  .catch((error) => {
    console.log("⚠️ Error al procesar:", error);
  })
  .finally(() => {
    console.log("🔄 Procesamiento de archivo terminado");
  });

console.log("\n--- Procesando archivo inválido ---");
procesarArchivo("archivo.xyz")
  .then((archivo) => {
    console.log("📄 Archivo procesado:", archivo);
  })
  .catch((error) => {
    console.log("⚠️ Error al procesar:", error);
  })
  .finally(() => {
    console.log("🔄 Procesamiento de archivo terminado");
  });
