let operar = (operacion, a, b) => {
  switch(operacion) {
    case "suma": return a + b;
    case "resta": return a - b;
    case "multiplicacion": return a * b;
    case "division": return a / b;
    default: return "Operacion invalida"
  }
}

