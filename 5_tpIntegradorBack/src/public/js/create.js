let contenedorProductos = document.getElementById("contenedor-productos");
let altaProductsForm = document.getElementById("altaProducts-form");
let url = "http://localhost:3000/api/products";


altaProductsForm.addEventListener("submit", async (event) => {

    event.preventDefault(); // Formulario no enviado por defecto

    // Obtenemos los datos de este formulario a traves de un objeto FormData
    let formData = new FormData(event.target);
    console.log(formData); // FormData(4) { name → "Johnny Melavo", image → "johnnymelavo.com", type → "CD", price → "12" }

    // Ahora creamos un objeto JS a partir de los datos de este objeto FormData
    let data = Object.fromEntries(formData.entries()); // Ya tenemos nuestro objeto con todos los valores del fomulario para mandarlos al servidor
    console.log(data); // {name: 'Merlin', image: 'prueba', type: 'LP', price: '123'}

    // Ahora, con el nuevo objeto JS creado a partir de los valores de nuestros formularios, se lo enviamos al servidor en formato JSON
    try {
        // let url = "http://localhost:3000/api/products";
        // Para hacer otras operaciones distintas a GET, necesitamos especificar mas informacion en el segundo parametro de fetch
        let response = await fetch(url, { // Este 2o parametro es un objeto de opciones
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }); 

        console.log(response);
        
        let result = await response.json();
        console.log(result)

        if (response.ok) {
            console.log(result.message);
            alert(`Producto creado con exito con id: ${result.productId}`);
        } else {

        }


    } catch(error) {
        console.error("Error al enviar los datos: ", error);
        alert("Error al procesar la solicitud");
    }
});