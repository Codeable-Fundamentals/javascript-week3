// Funciones contructoras
// que servian para contruir objetos dentro de JS
// y nos ayudaban a heredar ciertas funciones , y asi cada instancia , podria heredarlos


console.log("------------FUNCION CONTRUCTORA ------------");
// Esta es la funcion contructora
function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

// estos son las funciones que estan dentro del Funcion contructora
Animal.prototype.dormir = function () {
  return `${this.name} esta durmiendo......`;
};

// Son las instancias
const perro = new Animal("Bobby", 45);
const gato = new Animal("Kitty", 20);

console.log(perro.dormir());

console.log("---------- CLASES ---------");

class Animal2 {
  // el contructor de la clase
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
    this.especie = "mamiferos";
  }

  // declarar la funciones de clase
  comer(cantidad_de_comida) {
    console.log(`${this.name} esta comiendo.....`);
    this.energy += cantidad_de_comida;
  }

  dormir() {
    return `${this.name} esta durmiendo......`;
  }
}

const conejo = new Animal2("Bonnie", 0);
console.log(conejo.energy);
conejo.comer(13);
console.log(conejo.energy);
console.log(conejo.dormir())
console.log(conejo.especie);

console.log("---------- CLASES 2 ---------");
