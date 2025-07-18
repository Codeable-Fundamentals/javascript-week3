class Animal {}

class Transporte {
  constructor() {}

  arrancar() {
    return `El transporte esta arrancando...`;
  }
  apagar() {
    return `El transporte esta apagando...`;
  }

  static cargarCombustible(tipoCombustible = "Gasolina") {
    return `El transporte esta cargando combustible de tipo: ${tipoCombustible}`;
  }
}

const carro = new Transporte();
const avion = new Transporte();
const barco = new Transporte();
const tren = new Transporte();


console.log(carro.arrancar());
console.log(avion.apagar());
// console.log(barco.cargarCombustible("Gasolina")); // ERROR: no se puede llamar a un método estático desde una instancia
console.log(Transporte.cargarCombustible("Diesel")); // Llamada correcta al método estático

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

// carro.cargarCombustible() // Error: NO XISTE
 
console.log(carro.constructor.name)
console.log(barco instanceof Animal)
console.log(barco instanceof Transporte)