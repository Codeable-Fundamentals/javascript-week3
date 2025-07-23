console.log("Antes del saludo");

try {
  setTimeout(() => console.log(saludo), 1000); // <-- lanzará un error // WEB API MACROTASK Queue (cola de MACRO TAREAS )
} catch (error) {
  // no entro aqui :s
  console.error("Se detectó un error 🫢🫢🫢🫢🫢");
}

console.log("Después del saludo");
console.log("CONTINUARA..... ???????");
console.log("CONTINUARA..... ???????");
console.log("CONTINUARA..... ???????");
console.log("CONTINUARA..... ???????");
console.log("CONTINUARA..... ???????");
console.log("CONTINUARA..... ???????");
console.log("CONTINUARA..... ???????");
