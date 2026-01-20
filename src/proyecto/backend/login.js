const usuarios = [
  { correo: "admin@artesanias.com", contrasena: "1234", rol: "admin" },
  { correo: "comerciante@artesanias.com", contrasena: "1234", rol: "comerciante" },
  { correo: "cliente@artesanias.com", contrasena: "1234", rol: "cliente" }
];

function login() {
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;

  const usuario = usuarios.find(
    u => u.correo === correo && u.contrasena === contrasena
  );

  if (usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Bienvenido " + usuario.rol);
    window.location.href = "productos.html";
  } else {
    alert("Correo o contraseña incorrectos");
  }
}
