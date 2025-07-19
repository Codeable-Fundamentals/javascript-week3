class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }

  comer(cantidad) {
    console.log(`${this.nombre} está comiendo.`);
    this.energia += cantidad;
  }

  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo.`);
    this.energia += tiempo;
  }

  jugar(tiempo) {
    console.log(`${this.nombre} está jugando.`);
    this.energia -= tiempo;
  }

  get status() {
    return `${this.nombre} tiene ${this.energia} de energía`;
  }

  set status(energia) {
    if (energia >= 0) {
      this.energia = energia;
    }
  }
}

class Gato extends Animal {
  constructor(nombre, energia) {
    super(nombre, energia);
    this.tipo = "Gato";
  }

  comer(cantidad) {
    console.log(`${this.nombre} está comiendo pescado 🐟🐟🐟🐟🐟🐟.`);
    this.energia += cantidad;
  }

  maullar() {
    return `${this.nombre} está maullando.`;
  }
}

const kitty = new Gato("Kitty", 10);
console.log(kitty.status); // 'Kitty tiene 10 de energía'

kitty.comer(5);
console.log(kitty.status); // 'Kitty tiene 15 de energía'
