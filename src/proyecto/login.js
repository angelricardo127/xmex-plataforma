function login() {
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;

  if (correo === "cliente@artesanias.com" && contrasena === "1234") {
    localStorage.setItem("usuario", correo);
    alert("Bienvenido");
    window.location.href = "productos.html";
  } else {
    alert("Datos incorrectos");
  }
}
