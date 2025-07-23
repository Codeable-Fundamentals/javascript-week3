try {
  console.log("Antes del saludo");

  console.log(saludo); // ReferenceError: saludo is not defined

  console.log("Después del saludo");
} catch (err) {
  console.log("ERROR: ", err);
  console.log("ERROR MESSAGE: ", err.message);
  console.log("ERROR TYPE OF: ", typeof err);
  console.log("ERROR TYPE OF: ", Object.keys(err));
}

console.log("continua......");
console.log("continua 2......");
console.log("continua 3 ......");
