let contenedorProductos = document.getElementById("contenedor-productos");

async function obtenerProductos() {
    try {
        // Hacemos la peticion get a la url de nuestra api rest para obtener los productos
        // Ojo! Para evitar que la politica de seguridad CORS bloquee nuestra peticion fetch a esa url, necesitamos habilitar CORS desde nuestra API Rest
        let respuesta = await fetch("http://localhost:3000/products");
        let respuestaFormato = await respuesta.json();

        let productos = respuestaFormato.payload;

        console.table(productos);

        mostrarProductos(productos);

    } catch (error) {
        console.error(error);
    }
}

function mostrarProductos(productos) {
    let htmlProductos = "";

    productos.forEach(prod => {
        htmlProductos += `
            <div class="card-producto">
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>$${prod.precio}</p>
            </div>
        `;

        contenedorProductos.innerHTML = htmlProductos;
    })
}

function init() {
    obtenerProductos();
}

init();