function dividir(a, b) {
  // Implementa las siguientes validaciones:
  // 1. Si a o b no son números, lanza un TypeError
  // 2. Si b es 0, lanza un Error personalizado
  // 3. Si todo está bien, retorna a/b
  
  // Tu código aquí
}

// Prueba tu función
try {
  console.log(dividir(10, 2));      // Debería funcionar
  console.log(dividir(10, 0));      // Debería lanzar error
  console.log(dividir("10", 2));    // Debería lanzar error
} catch (error) {
  console.log("Error capturado:", error.message);
}