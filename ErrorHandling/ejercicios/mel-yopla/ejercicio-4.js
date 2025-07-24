// Base de datos de usuarios simulada
const usuarios = [
  { email: "admin@test.com", password: "123456", activo: true },
  { email: "user@test.com", password: "password", activo: false },
  { email: "demo@test.com", password: "demo123", activo: true },
];

function login(email, password) {
  try {
    // Implementa las siguientes validaciones:
    // 1. Email y password son requeridos (lanza Error si faltan)
    // 2. Email debe tener formato válido (contiene @ y .)
    // 3. Usuario debe existir en la base de datos
    // 4. Password debe coincidir
    // 5. Usuario debe estar activo
    // Si todo está bien, retorna: { success: true, message: "Login exitoso" }
    // Si hay error, será capturado por el catch

    // 1. Validar que se haya ingresado email y password
    if (!email || !password) {
      throw new Error("Email y contraseña son obligatorios");
    }

    // 2. Validar formato del email
    if (!email.includes("@") || !email.includes(".")) {
      throw new Error("Formato de email inválido");
    }

    // 3. Buscar el usuario por email
    const usuario = usuarios.find((user) => user.email === email);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    // 4. Verificar la contraseña
    if (usuario.password !== password) {
      throw new Error("Contraseña incorrecta");
    }

    // 5. Verificar si el usuario está activo
    if (!usuario.activo) {
      throw new Error("Usuario inactivo");
    }

    // Si todo está bien:
    return { success: true, message: "Login exitoso" };
  } catch (error) {
    return { success: false, message: error.message };
  } finally {
    console.log(`Intento de login para: ${email || "email no proporcionado"}`);
  }
}

// Casos de prueba
const casosLogin = [
  ["admin@test.com", "123456"], // ✅ Válido
  ["user@test.com", "password"], // ❌ Usuario inactivo
  ["admin@test.com", "wrong"], // ❌ Password incorrecto
  ["noexiste@test.com", "123456"], // ❌ Usuario no existe
  ["", "123456"], // ❌ Email requerido
  ["admin@test.com", ""], // ❌ Password requerido
  ["emailinvalido", "123456"], // ❌ Email inválido
];

console.log("=== Pruebas del Sistema de Login ===");
casosLogin.forEach(([email, pass]) => {
  const resultado = login(email, pass);
  console.log(`${resultado.success ? "✅" : "❌"} ${resultado.message}`);
});
