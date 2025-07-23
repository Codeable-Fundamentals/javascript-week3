function calculadora(operacion, a, b) {
  // La función debe:
  // 1. Validar que 'operacion' sea "+", "-", "*", o "/"
  // 2. Validar que a y b sean números
  // 3. Manejar división por cero
  // 4. Retornar el resultado de la operación
  
  // Tu código aquí
}

// Casos de prueba
const casos = [
  ["+", 5, 3],
  ["-", 10, 4], 
  ["*", 7, 6],
  ["/", 15, 3],
  ["/", 10, 0],     // Error: división por cero
  ["x", 5, 3],      // Error: operación inválida
  ["+", "5", 3],    // Error: tipo inválido
];

casos.forEach(([op, a, b]) => {
  try {
    const resultado = calculadora(op, a, b);
    console.log(`${a} ${op} ${b} = ${resultado}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});
