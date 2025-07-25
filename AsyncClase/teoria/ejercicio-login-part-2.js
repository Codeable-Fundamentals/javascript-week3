const prompt = require('prompt-sync')();

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

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

function getUser(email, password, callback) {
  setTimeout(() => {
    const user = users.find((u) => u.email === email);
    if (!user || user.password !== password) {
      const error = new Error("Credenciales invalidas");

      callback(error);
      return;
    }

    callback(null, user);
  }, 2000);
}

function getPublicRepos(username, callback) {
  setTimeout(() => {
    const hasConnectionError = Math.random() > 0.5;
    if (hasConnectionError) {
      const error = new Error("Error de conexión");
      callback(error);
      return;
    }

    const repos = githubPublicRepos.filter((repo) => repo.owner === username);
    callback(null, repos);
  }, 2000);
}

function start() {
  const email = prompt("Email:", "pepe@mail.com");
  const password = prompt("Password:", "supersecret");

  console.warn("Login user...");
  getUser(email, password, function (error, user) {
    if (error) {
      console.error(error.message);
      return;
    }

    console.log("¡Bienvenid@ " + user.name + "!");

    console.warn("Loading Github repos...");

    getPublicRepos(user.githubUsername, function (error, repos) {
      if (error) {
        console.error(error.message);
        return;
      }
      console.log("Tus repositorios de Github:");
      repos.forEach((repo) => console.log(repo.name));
    });
  });
}

start();
