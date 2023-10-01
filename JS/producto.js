document.addEventListener("DOMContentLoaded", () => {
    const detalleProducto = document.getElementById("detalles-productos");
    // Obtuve ID//
    const urlParams = new URLSearchParams(window.location.search);
    const idProductos = parseInt(urlParams.get("id"));
    //Obtuve los datos de los productos//
    const datosProductos = JSON.parse(localStorage.getItem("productos"));
    //Obtuve el prod por ID//
    const productoSeleccionado = datosProductos.find((producto) => producto.id === idProductos);
// Si encuentra el producto crea el div con la informacion//
    if (productoSeleccionado) {
        const contenedorDetalleProducto = document.createElement("div");
        contenedorDetalleProducto.classList.add("detalles-productos");
        contenedorDetalleProducto.innerHTML =
            `<h4>${productoSeleccionado.nombre}</h4>
    <img class="foto_producto" src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}">
    <p>${productoSeleccionado.descripcion}</p>
    <p>$${productoSeleccionado.precio}</p>
    <button>Comprar</button>`;

        detalleProducto.appendChild(contenedorDetalleProducto);
    }
});