const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

// se encargara de devolver un usuario
function getUser(email, password, callback) {
  if (typeof email !== "string" || typeof password !== "string") {
    throw new TypeError(
      "El formato del email o de la contraseña, son invalidos"
    );
  }

  setTimeout(() => {
    const user = users.find((user) => user.email === email);

    console.log("Se encontro el user ?: ", user);

    console.log("Passwords: ", user.password, " | ", password);

    if (!user || user.password !== password) {
      const error = new Error("Credenciales invalidas!");

      console.log("Error creado: ", error);

      callback(error);
      return;
    }

    callback(null, user);
  }, 2000);
}

const callbackFn = (error, user) => {
  console.log("Me llega el error ? : ", error);
  console.log("Me llega el user ????: ", user)
  if (error) {
    console.error(error.message);
    return;
  }
  console.log("¡Bienvenid@ " + user.name + "!");
};

getUser("pepe@mail.com", "supersecret", callbackFn);

//getUser("pepe@mail.com", "supersecret123", callbackFn);

// TEORIA VISTA ANTES:

// // function explicita
// function nameOfFunction() {}

// // funcion anonima
// const function2 = function () {};

// // Arrow Function
// const function3 = () => {};

// // CALLBACK Dif CALLSTACK
// // Callback => Es aquella funcion , que ingresa como argumento a otra funcion
// // Call Stack => es la pila de ejecucion que usa JS para implementar el mecanismo del EventLoop.

// function calculadora(num1, num2, operacion) {
//   return operacion(num1, num2);
// }

// const sumar = (num1, num2) => num1 + num2;
// const restar = (num1, num2) => num1 - num2;
// const multiplicar = (num1, num2) => num1 * num2;
// const dividir = (num1, num2) => num1 / num2;

// const test = calculadora(5, 8, restar);
// console.log("la respuesta es: ", test);
