// ========================================
// EJEMPLO 3: Simulando una petición HTTP
// ========================================

function simularPeticionHTTP(url) {
  return new Promise((resolve, reject) => {
    console.log(`🌐 Haciendo petición a: ${url}`);

    // Simulamos tiempo de respuesta del servidor
    setTimeout(() => {
      // Simulamos que algunas URLs fallan
      if (url.includes("error")) {
        reject({
          status: 404,
          message: "Página no encontrada",
        });
      } else {
        resolve({
          status: 200,
          data: {
            usuario: "Juan Pérez",
            email: "juan@email.com",
            edad: 28,
          },
        });
      }
    }, 2500);
  });
}

// Petición exitosa
console.log("\n--- Simulando petición exitosa ---");
simularPeticionHTTP("https://api.ejemplo.com/usuario/123")
  .then((respuesta) => {
    console.log("📊 Datos recibidos:", respuesta.data);
    console.log("📈 Status:", respuesta.status);
  })
  .catch((error) => {
    console.log("💥 Error en la petición:", error.message);
    console.log("📉 Status:", error.status);
  })
  .finally(() => {
    console.log("🏃‍♂️ Petición HTTP finalizada");
  });

// Petición con error
console.log("\n--- Simulando petición con error ---");
simularPeticionHTTP("https://api.ejemplo.com/error")
  .then((respuesta) => {
    console.log("📊 Datos recibidos:", respuesta.data);
  })
  .catch((error) => {
    console.log("💥 Error en la petición:", error.message);
    console.log("📉 Status:", error.status);
  })
  .finally(() => {
    console.log("🏃‍♂️ Petición HTTP finalizada");
  });
