class Human {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.isFemale = true;
  }

  saltar() {
    return `El humano llamado ${this.name} esta saltando.....`;
  }
}

const pepe = new Human("PEPE");
console.log(pepe.saltar());
console.log(pepe.isFemale);
