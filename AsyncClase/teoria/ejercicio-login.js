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

// Simulamos una base de datos de repositorios
const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

function getPublicRepos(userName, callbackFn) {
  // Simulando la conexion con Gitub
  const hasConnectionError = Math.random() > 0.5;
  if (hasConnectionError) {
    throw new Error("Error con la conexion de Github!");
  }

  setTimeout(() => {
    const reposFounded = githubPublicRepos.filter(
      (repo) => repo.owner === userName
    );
    if (reposFounded.length === 0) {
      const error = new Error("El usuario, no tiene repositorios");
      callbackFn(error);
      return;
    }

    callbackFn(null, reposFounded);
  }, 2000);
}

const getRepos = (error, listOfRepos) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log("Lista de repos!!!: ", listOfRepos);
  return listOfRepos;
};

try {
  const test = getPublicRepos("anita-dev", getRepos);
  console.log("TEST REPOS ", test); // undefined
} catch (error) {
  console.log(error.message);
}

console.log("-----------------------------");
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

const cualquierNombre = (error, user) => {
  console.log("Me llega el error ? : ", error);
  console.log("Me llega el user ????: ", user);
  if (error) {
    console.error(error.message);
    return;
  }
  console.log("¡Bienvenid@ " + user.name + "!");
};

getUser("pepe@mail.com", "supersecret", cualquierNombre);

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
