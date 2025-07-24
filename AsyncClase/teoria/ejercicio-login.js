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
    if (!user || user.password !== password) {
      throw new Error("Credenciales invalidas!");
    }

    callback(user);
  }, 2000);
}

const callbackFn = (user) => {
  console.log("¡Bienvenid@ " + user.name + "!");
};

const user = getUser("pepe@mail.com", "supersecret", callbackFn);
