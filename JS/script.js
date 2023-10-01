//Toma datos de json//
fetch("productos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const detalleProductos = document.getElementById("grid_productos")
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  if (datosProductos && datosProductos.length > 0) {
    datosProductos.forEach((producto) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("card_prod");
      gridItem.innerHTML =
        `<h4>${producto.nombre}</h4>
        <img class="foto_producto" src="${producto.imagen}" alt="${producto.nombre}">
    
    <button>Ver detalles</button>`;
    gridItem.addEventListener("click", () =>{
      mostrarDetalleProducto(producto)
    });
      detalleProductos.appendChild(gridItem);
    });
  }
});

function mostrarDetalleProducto(producto){
window.location.href = `detalle.html?id=${producto.id}`;
}
