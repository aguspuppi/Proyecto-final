document.addEventListener("DOMContentLoaded",() => {
    const detalleProductos = document.getElementById("grid_productos");

    const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  const productoSeleccionado = datosProductos.productos.find(
    (producto) => producto.id == idProducto
  );
})