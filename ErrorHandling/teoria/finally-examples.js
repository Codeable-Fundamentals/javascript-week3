function saludar(name) {
  if (name === null || name === undefined || name === "") {
    throw new TypeError("the name is invalid!");
  }

  return `hola ${name}!`;
}

try {
  const test = saludar("GRECIA");
  console.log(test);
} catch (error) {
  console.error("Ocurrio un error : ", error.message);
} finally {
  console.log("🏁 aqui dentro de finally!!!!! 🏁");
}
