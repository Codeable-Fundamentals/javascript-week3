function calculadora(operacion, a, b) {
  // La función debe:
  // 1. Validar que 'operacion' sea "+", "-", "*", o "/"
  // 2. Validar que a y b sean números
  // 3. Manejar división por cero
  // 4. Retornar el resultado de la operación

  // 1. Validar operación permitida
  const operacionesValidas = ["+", "-", "*", "/"];
  if (!operacionesValidas.includes(operacion)) {
    throw new Error(`Operación inválida: "${operacion}". Usa +, -, * o /`);
  }

  // 2. Validar que a y b sean números
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos operandos deben ser números");
  }

  // 3. Manejar división por cero
  if (operacion === "/" && b === 0) {
    throw new Error("No se puede dividir entre cero");
  }

  // 4. Realizar y retornar el resultado
  switch (operacion) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

// Casos de prueba
const casos = [
  ["+", 5, 3],
  ["-", 10, 4],
  ["*", 7, 6],
  ["/", 15, 3],
  ["/", 10, 0], // Error: división por cero
  ["x", 5, 3], // Error: operación inválida
  ["+", "5", 3], // Error: tipo inválido
];

casos.forEach(([op, a, b]) => {
  try {
    const resultado = calculadora(op, a, b);
    console.log(`${a} ${op} ${b} = ${resultado}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});
