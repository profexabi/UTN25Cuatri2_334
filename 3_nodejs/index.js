/*============================
    Introduccion a Node.js
==============================

    1. Instalacion de Node.js

    2. Instalacion de Node Package Manager (npm)

---

Abriremos la terminal de VSCodium o VSCode con Ctrl + ñ o Ctrl + j

Navegamos hasta la carpeta donde tenemos nuestro archivo javascript para ejecutarlo

Accedemos a una carpeta con el comando cd (change directory)

    cd carpetaNode -> Navegamos hasta la carpeta donde tenemos nuestro proyecto de node
    node index.html -> Aca ejecutamos el archivo javascript

    cd .. -> Retrocedemos un nivel (una carpeta atras)
    cd ../../ -> Retrocedemos dos niveles (dos carpetas atras)

Con esto instalado, vamos a tener a disposicion ciertos modulos "nativos" de Node.js
Es decir, funcionalidades que vienen preinstaladas con Node.js



======================================
    Que son los modulos en Node.js
======================================

Los modulos en Node.js son como bloques de lego, es decir, bloques de construccion que nos permiten reutilizar codigo de forma eficiente

En lugar de tener todo en un solo archivo gigante, podemos dividirlo en distintos archivos o modulos para lluego importalos cuando los necesitemos

Esta caracteristica nos permite dividir el codigo en partes mas pequeñas, manejables y reutilizables facilitando la organizacion, mantenimiento y escalabilidad de las aplicaciones

Los pasos para trabajar con modulos son siempre asi

    1. Los instalamos (de ser necesario, en caso de que no sean modulos nativos -> preinstalados)
    2. Los importamos (los traemos a nuestra aplicacion para usarlos)
    3. Los inicializamos (los guardamos en una variable) para poder acceder a sus metodos



======================================
    Modulos nativos de Node.js
====================================*/

// os (Operative System) nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js

// Importamos el modulo nativo os para interactuar con el sistema operativo
const os = require("os");

// Una vez que importamos este modulo, podemos acceder a sus funcionalidades
let memoriaLibre = os.freemem();
let tipoSistema = os.type();

console.log(`Memoria libre: `, memoriaLibre);
console.log(`Tipo de Sistema Operativo: ${tipoSistema}`);
console.log(os.hostname());



// fs (File System) nos permite itneractuar con el sistema de archivos de nuestro sistema operativo, para leer, escribir, actualizar y borrar archivos de forma sencilla

// importamos el modulo file system (fs)
const fs = require("fs");

fs.readFile("archivos/archivo.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Ocurrio un error: ", err);
        return;
    }

    console.log(`Contenido del archivo: ${data}`);
});


// path (Ruta) nos ayuda a manejar y manipular rutas de archivos y directorios de forma mas comoda y segura

// Importamos el modulo path
const path = require("path");

// dirname es una variable de entorno en Node.js que proporciona la ruta absoluta del directorio que cotiene el archivo JS actualmente en ejecucion

console.log(__dirname); // /home/xabier/Escritorio/Docencia/2 Cuatri UTN 2025/UTN25Cuatri2_334/3_nodejs


// filename es una variable global de Node.js que proporciona la ruta del archivo que se esta ejecutando actualmente
console.log(__filename); // /home/xabier/Escritorio/Docencia/2 Cuatri UTN 2025/UTN25Cuatri2_334/3_nodejs/index.js


// join nos permite combinar rutas
const rutaTxt = path.join(__dirname, "/archivos/archivo.txt");
console.log(`La ruta a mi archivo de texto es: ${rutaTxt}`);

const nombreArchivo = path.basename(rutaTxt);
console.log(`Mi archivo de texto se llama: ${nombreArchivo}`);


/*==============================================
    Como funcionan los modulos en Node.js
================================================

Cada vez que usamos require(), lo que hacemos es importar un modulo para que podamos usar sus funciones en nuestro archivo actual.

Podemos, por supuesto, crear nuestros propios modulos

En moduloExterno.js, creamos esta funcion y la exportamos

    function saludar(nombre) {
            return `Holis, ${nombre}`;
    }

    // Exportamos esta funcion para usarla en otro archivo
    module.exports = saludar;
*/

// Importamos esta funcion de moduloExterno.js
const saludar = require("./moduloExterno.js"); // Aca en esta variable introduzco la funcion saludar

console.log(saludar("Anibal")); // Holis, Anibal



/*============================
    Servidor con Node.js
==============================

Vamos a crear un servidor basico con Node.js gracias a su modulo nativo HTTP.
Este modulo nos permite crear un servidor web sin necesidad de instalar nada adicional

Vamos a cerar un servidor basico que responde con un mensaje "Hola mundo" cada vez que alguien visita nuestra pagina
*/

// Importamos el modulo http
const http = require("http");

// Creamos el servidor
const servidor = http.createServer((req, res) => {

    // Configuramos la respuesta
    res.statusCode = 200; // Codigo 200 significa que la peticion fue exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto

    res.end("Hola mundo desde Node.js"); // Mensaje que enviamos al cliente
});

// Definimos el puerto y arrancamos el servidor
const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto: localhost:${puerto}`);
});

/* Explicacion del codigo

    1. Importamos el modulo http: Esto nos da acceso a todas las funcionalidades necesarias para crear un servidor

    2. Creamos un servidor: Utilizamos el metodo http.createServer para definir un servidor que escuche las solicitudes de los clientes y les responda

    3. Definimos la respuesta del servidor: El servidor siempre respondera con el mensaje "Hola mundo desde Node.js"

    4. Escuchar en un puerto: El servidor se ejecuta en el puerto 3000 (puede ser cualquier puerto libre) y ademas muestra un mensaje en la consola cuando esta listo
*/

