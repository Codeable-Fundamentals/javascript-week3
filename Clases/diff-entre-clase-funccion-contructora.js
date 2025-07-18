// Las funciones contructoras , dse pueden usar incluso antes de ser declaradas
// Esto es debido al "Hoisting"
// En JavaScript, hoisting es el comportamiento donde las declaraciones de
// variables y funciones son "elevadas"
// al principio de su ámbito (scope) antes de que el código se ejecute.

const BWM = new Carro("luxury-5000");
console.log(BWM);

function Carro(model) {
  this.model = model;
}

Carro.prototype.arrancar = function () {
  return `El carro modelo : ${this.model}, esta arrancando...`;
};

Carro.prototype.apagar = function () {
  return `El carro modelo : ${this.model}, esta apagando...`;
};

Carro.prototype.acelerar = function () {
  return `El carro modelo : ${this.model}, esta acelerando...`;
};

console.log("---------- USANDO EL FOR IN EN FUNCIONES CONTRUCTORAS ----------");

for (const propiedad in BWM) {
  console.log(`Propiedad: ${propiedad}, Valor: ${BWM[propiedad]}`);
}

console.log("-----------Ejemplo con clases ---------");

// const boeing = new Avion("Boeing 737", 2007);
// console.log(boeing.despegar());

class Avion {
  constructor(model, year) {
    this.model = model;
    this.year = year;
    this.propietario = "Grecia Vuelos Eternos";
    this.tipo_gasolina = "Deisel"
  }

  despegar() {
    return `El avion modelo: ${this.model}, del año ${this.year}, esta despegando ....`;
  }
  aterrizar() {
    return `El avion modelo: ${this.model}, del año ${this.year}, esta aterrizando ....`;
  }
  volar() {
    return `El avion modelo: ${this.model}, del año ${this.year}, esta volando ....`;
  }
}

console.log("----------- USANDO EL FOR IN EN CLASES ---------");

const boeing = new Avion("Boeing 737", 2007);
for (const propiedad in boeing) {
  console.log(`Propiedad: ${propiedad}, Valor: ${boeing[propiedad]}`);
}

console.log("-----------llamar a una clase sin la palabra new --------");

//const boeing =  Avion("Boeing 737", 2007);
// TypeError: Class constructor Avion cannot be invoked without 'new'
