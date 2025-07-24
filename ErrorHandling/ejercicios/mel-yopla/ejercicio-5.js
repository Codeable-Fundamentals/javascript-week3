function parseJSONSeguro(jsonString, valorPorDefecto = null) {
  // La función debe:
  // 1. Intentar parsear el JSON
  // 2. Si hay error de sintaxis, retornar el valor por defecto
  // 3. Si el input no es string, lanzar TypeError
  // 4. Registrar información útil sobre los errores

  try {
    // Validación 1: debe ser un string
    if (typeof jsonString !== "string") {
      throw new TypeError("El valor ingresado no es una cadena (string)");
    }

    // Validación 2: intentar parsear el JSON
    const resultado = JSON.parse(jsonString);

    // Validación 3: que sea un objeto
    if (typeof resultado !== "object" || resultado === null) {
      throw new Error("El JSON no contiene un objeto válido");
    }

    return resultado;
  } catch (error) {
    // Validación 4: Mostrar información útil
    console.log("Error al parsear JSON:");
    console.log("Nombre:", error.name);
    console.log("Mensaje:", error.message);

    // Retornar el valor por defecto
    return valorPorDefecto;
  }
}

// Casos de prueba
const casosJSON = [
  '{"nombre": "Juan", "edad": 30}', // ✅ JSON válido
  '{"nombre": "Ana", "edad": }', // ❌ JSON inválido
  "no es json", // ❌ No es JSON
  123, // ❌ No es string
  "[]", // ❌ No es JSON
  null, // ❌ Null
];

console.log("=== Pruebas del Parser JSON ===");
casosJSON.forEach((caso, index) => {
  try {
    const resultado = parseJSONSeguro(caso, { error: true });
    console.log(`Caso ${index + 1}:`, resultado);
  } catch (error) {
    console.log(`Caso ${index + 1} - Error:`, error.message);
  }
});
