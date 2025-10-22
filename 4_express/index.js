// Ya instalamos previamente express con npm i express

// Ahora instalado, vamos a importarlo
const express = require("express");

// Creamos una (instancia de) aplicacion de Express
const app = express();


/*===============
    Rutas
=================
Nos permiten responder a peticiones HTTP (GET, POST, PUT y DELETE) desde diferentes URL

Vamos a poder tener rutas para
    - / Pagina princpal
    - /productos
    - /api/usuarios/:id
*/

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

// Ruta Sobre Mi
app.get("/sobre-mi", (req, res) => {
    res.send("Esta es la pagina Sobre Mi");
});

// Ruta Contacto
app.get("/contacto", (req, res) => {
    res.send("Contactame en cosme@fulanito.com");
});


// Escuchamos en el puerto 4000
const puerto = 4000;

app.listen(puerto, () => {
    console.log(`Servidor Express corriendo en el puerto ${puerto}`);
});

/* Explicacion del codigo

    1. Instalar e importar Express: Traemos la libreria express al archivo index.js

    2. Crear una aplicacion: Llamamos a la funcion express() que devuelve una instancia de la aplicacion

    3. Definimos una ruta: Usamos app.get para definir que hacer cuando alguien visita la raiz "/" de nuestro servidor. Aca responderemos con un simple "Hola mundo desde Express.js"

    4. Escuchar en un puerto: Nuestro servidor express estara escuchando en el puerto 4000 y listo para aceptar conexiones


Ventajas de Express.js con respecto al modulo nativo http de Node.js

    - Simplicidad: Con Express.js, escribir codigo para crear rutas y manejar peticiones es mucho mas simple y requiere menos codigo.
    El modulo nativo http es mas bajo nivel y puede ser tedioso para aplicaciones grandes

    - Middlewares: Express tiene un buen sistema de middlewares. Que son funciones que se ejecutan en el medio de las peticiones y las respuestas, lo que permite hacer validaciones, autenticar usuarios, etc

    - Manejo de rutas: Con Express podemos manejar rutas facilmente, permitiendo organizar mejor las diferentes partes de nuestra aplicacion. En el caso de http, tendriamos que mnejar manualmente las diferentes rutas
*/

// TO DO, terminar un par de rutas mas y ver teoria de Cliente-Servidor y Protocolo HTTP