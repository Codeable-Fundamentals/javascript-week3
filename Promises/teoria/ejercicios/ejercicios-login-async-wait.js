// Simulamos una base de datos de usuarios
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
  {
    email: "grecia@gmail.com",
    password: "123456",
    name: "Grecia",
    githubUsername: "grecia-dev",
  },
];

// Simulamos una base de datos de repositorios
const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
  { id: 6, owner: "pepe-20", name: "my-first-web-page" },
];

// ========================================
// FUNCIÓN 1: Autenticar usuario (asíncrona)
// ========================================
function atenticarUsuario(email, password) {
  return new Promise((resolve, reject) => {
    console.log(`🔐 Intentando autenticar usuario: ${email}`);
    // Simulamos el tiempo que tarda la consulta a la base de datos
    setTimeout(() => {
      // Buscamos el usuario en nuestra "base de datos"
      const usuario = users.find((user) => user.email === email);

      if (!usuario) {
        reject(`❌ Usuario no encontrado: ${email}`);
        return;
      }

      if (usuario.password !== password) {
        reject(`❌ Contraseña incorrecta para: ${email}`);
        return;
      }

      const usuarioAutorizado = {
        name: usuario.name,
        email: usuario.email,
        githubUsername: usuario.githubUsername,
      };

      resolve(usuarioAutorizado);
    }, 2000); // Simulamos 2 segundos de demora
  });
}

// ========================================
// FUNCIÓN 2: Buscar repositorios del usuario (asíncrona)
// ========================================
function obtenerRepos(githubUsername) {
  return new Promise((resolve, reject) => {
    // Simulamos la conexion al servidor de Github
    setTimeout(() => {
      const repositoriosUsuario = githubPublicRepos.filter(
        (repo) => repo.owner === githubUsername
      );

      if (repositoriosUsuario.length === 0) {
        reject(`❌ No se encontraron repositorios para: ${githubUsername}`);
        return;
      }

      resolve(repositoriosUsuario);
    }, 1500);
  });
}

async function iniciarProceso() {
  try {
    const user = await atenticarUsuario("grecia@gmail.com", "123456");
    const repos = await obtenerRepos(user.githubUsername);
    

    return {
      userData: user,
      gitHubRepos: repos,
    };
  } catch (error) {
    console.log(`🚫 Error en el proceso: ${error}`);
  } finally {
    console.log("🏁 Proceso de autenticación y búsqueda completado");
  }
}

async function start() {
  const resultado = await iniciarProceso();

  console.log("🏁  RESULTADO: 🏁", resultado)
  return resultado;
}

start();
