alert("carrito.js cargado correctamente");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

function verCarrito() {
  let mensaje = "Productos en el carrito:\n\n";
  let total = 0;

  carrito.forEach(p => {
    mensaje += `${p.nombre} - $${p.precio}\n`;
    total += p.precio;
  });

  mensaje += `\nTotal a pagar: $${total}`;
  alert(mensaje);
}
