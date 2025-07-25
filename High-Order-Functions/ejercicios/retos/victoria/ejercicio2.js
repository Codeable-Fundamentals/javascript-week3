//Ejercicio 2: Agrupar por Categoría (reduce)
// 
// Tienes un array de productos. Agrupa los productos por categoría y cuenta cuántos hay de cada una.

const productos = [
  { nombre: 'Laptop', categoria: 'tecnologia' },
  { nombre: 'Mesa', categoria: 'muebles' },
  { nombre: 'Mouse', categoria: 'tecnologia' },
  { nombre: 'Silla', categoria: 'muebles' },
  { nombre: 'Teclado', categoria: 'tecnologia' },
  { nombre: 'Escritorio', categoria: 'muebles' }
];
// Tu código aquí
function agruparPorCategoria(productos) {
  return productos.reduce((acumulador, producto) => {
    const categoria = producto.categoria;
    if (!acumulador[categoria]) {
      acumulador[categoria] = 0;
    }
    acumulador[categoria]++;
    return acumulador;
  }, {});
}

