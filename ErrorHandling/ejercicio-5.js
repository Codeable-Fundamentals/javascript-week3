function parseJSONSeguro(jsonString, valorPorDefecto = null) {
  // La función debe:
  // 1. Intentar parsear el JSON
  // 2. Si hay error de sintaxis, retornar el valor por defecto
  // 3. Si el input no es string, lanzar TypeError
  // 4. Registrar información útil sobre los errores
  
  // Tu código aquí
}

// Casos de prueba
const casosJSON = [
  '{"nombre": "Juan", "edad": 30}',        // ✅ JSON válido
  '{"nombre": "Ana", "edad": }',           // ❌ JSON inválido
  'no es json',                            // ❌ No es JSON
  123,                                     // ❌ No es string
  '[]',                                    // ✅ Array vacío válido
  null                                     // ❌ Null
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