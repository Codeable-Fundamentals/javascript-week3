// const escuela = {
//   nombre: "Codeable",
//   mostrarNombre: function() { // No es una arrow function 
//       console.log(this.nombre);
//   }
// };
 
// escuela.mostrarNombre(); // "Codeable"

// const escuela = {
//   nombre: "Codeable",
//   mostrarNombre: () => {
//       console.log(this.nombre);
//   }
// };
 
// escuela.mostrarNombre(); // "Codeable"


const escuela = {
  nombre: "Codeable",
  mostrarNombre: function () { // <- función tradicional (define this)
    const funcionInterna = () => { // <- función flecha (no tiene this)
      console.log(this.nombre);
    };
 
    funcionInterna();
  },
};
 
escuela.mostrarNombre(); 