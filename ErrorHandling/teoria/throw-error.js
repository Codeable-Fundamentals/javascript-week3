function saludar(name) {
  if (name === undefined || name === null || name === "") {
    // throw new Error("el nombre es invalido!"); // es el ERROR mas genérico en JS
    // throw new SyntaxError()
    // throw new ReferenceError()
    throw new TypeError("El tipo del nombre es invalido!");
  }

  return `Hola, ${name}! Bienvenid@!`;
}

try {
  const test = saludar(null);
  console.log(test);
} catch (e) {
  console.log("❌ Ocurrio un error");
  console.log("Error message 💬: ", e.message);
  console.log("Error name 🧔: ", e.name);
}
