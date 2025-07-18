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
 
const leo = new Animal("Leo", 7);
leo.status; // 'Leo tiene 7 de energía'
leo.status = 20;
leo.status; // 'Leo tiene 20 de energía'
