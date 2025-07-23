console.log("Antes del saludo");
setTimeout(() => {
  try {
    console.log(saludo);
  } catch (error) {
    console.log("Error message 💬: ", error.message);
    console.log("Error name 🧔: ", error.name)
    console.log("Error stack : ", error.stack)
    console.log("Hubo un error 🫢 !");
  }
}, 1000);

console.log("Después del saludo");