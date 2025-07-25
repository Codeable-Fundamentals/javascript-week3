// ========================================
// EJEMPLO 5: Encadenamiento de promesas
// ========================================

function paso1() {
  return new Promise((resolve) => {
    console.log("1️⃣ Ejecutando paso 1...");
    setTimeout(() => resolve("Paso 1 completado"), 1000);
  });
}

function paso2(datoPrevio) {
  return new Promise((resolve) => {
    console.log("2️⃣ Ejecutando paso 2...");
    setTimeout(() => resolve(`${datoPrevio} → Paso 2 completado`), 1000);
  });
}

function paso3(datoPrevio) {
  return new Promise((resolve) => {
    console.log("3️⃣ Ejecutando paso 3...");
    setTimeout(() => resolve(`${datoPrevio} → Paso 3 completado`), 1000);
  });
}

console.log("\n--- Encadenamiento de promesas ---");
paso1()
    .then(resultado1 => {
        console.log("✅", resultado1);
        return paso2(resultado1);
    })
    .then(resultado2 => {
        console.log("✅", resultado2);
        return paso3(resultado2);
    })
    .then(resultadoFinal => {
        console.log("🎉 Proceso completo:", resultadoFinal);
    })
    .catch(error => {
        console.log("💥 Error en algún paso:", error);
    })
    .finally(() => {
        console.log("🏁 Secuencia de pasos finalizada");
    });