console.log("Antes del saludo");
setTimeout(() => {
  try {
    console.log(saludo);
  } catch (error) {
    console.log("Hubo un error 🫢 !");
  }
}, 1000);

console.log("Después del saludo");