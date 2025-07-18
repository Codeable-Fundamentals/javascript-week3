//Ejercicio 2: Agrupar por Categoría (reduce)
//
// Tienes un array de productos. Agrupa los productos por categoría y cuenta cuántos hay de cada una.

const productos = [
  { nombre: "Laptop", categoria: "tecnologia" },
  { nombre: "Mesa", categoria: "muebles" },
  { nombre: "Mouse", categoria: "tecnologia" },
  { nombre: "Silla", categoria: "muebles" },
  { nombre: "Teclado", categoria: "tecnologia" },
  { nombre: "Escritorio", categoria: "muebles" },
];
// Tu código aquí

// Función de orden superior para agrupar por categoría
function agruparPorCategoria(arrayProductos) {
  return arrayProductos.reduce((grupo, producto) => {
    // Obtengo la categoría del producto actual
    const categoria = producto.categoria;

    // Si la categoría no existe en el grupo, la creo con 0
    if (!grupo[categoria]) {
      grupo[categoria] = 0;
    }

    // Sumo 1 a esa categoría
    grupo[categoria] = grupo[categoria] + 1;

    // Devuelvo el grupo actualizado
    return grupo;
  }, {}); // Empiezo con un objeto vacío
}

// Ejecutar la función
const resultado = agruparPorCategoria(productos);

// Pruebas y resultados
console.log("=== PRUEBAS DEL EJERCICIO ===");
console.log("");

console.log("📦 Productos originales:");
console.log(productos);
console.log("");

console.log("🔧 Ejecutando función agruparPorCategoria...");
console.log("Resultado:", resultado);
console.log("");

console.log("📊 Análisis detallado:");
console.log("- Productos de tecnología:", resultado.tecnologia);
console.log("- Productos de muebles:", resultado.muebles);
console.log("- Total de categorías:", Object.keys(resultado).length);
console.log(
  "- Total de productos:",
  Object.values(resultado).reduce((a, b) => a + b, 0)
);
console.log("");

console.log("✅ ¡Función ejecutada correctamente!");
