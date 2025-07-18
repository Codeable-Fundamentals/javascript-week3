class Human {
  constructor() {
    this.name = "Humano";
    this.age = 0;
    this.specie = "Homo sapiens";
  }

  dormir() {
    return `El humano esta durmiendo.....`;
  }
  comer() {
    return `El humano esta comiendo.....`;
  }
  correr() {
    return `El humano esta corriendo.....`;
  }
}

class Mujer extends Human {
  constructor(name, age) {
    super(); // Llama al constructor de la clase padre
    this.name = name;
    this.age = age;
  }

  hablar() {
    return `La mujer llamada ${this.name} esta hablando.....`;
  }
}

const faliola = new Mujer("Faliola", 25);

console.log(faliola.hablar());
console.log(faliola.dormir());
console.log(faliola.comer());
console.log(faliola.correr());
console.log(faliola instanceof Human); // true  
console.log(faliola instanceof Mujer); // true
console.log(faliola.specie); // "Homo sapiens"
console.log(faliola.name); // "Faliola"
console.log(faliola.age); // 25
