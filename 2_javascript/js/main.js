/*==============
    JSON
================

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que se convirtio en el estandar para la comunicacion entre aplicaciones en la web.

Basicamente, es texto plano, como un string, pero con una forma de estructurar la informacion igual a los objetos de JavaScript. Pero aunque proviene de JavaScript, es independiente del lenguaje

JSON es un formato de texto que representa datos estructurados basado en 2 estructuras fundamentales:

    1. Coleccion de pares nombre/valor: Equivalente a un objeto en JavaScript
    2. Lista ordenada de valores: Equivalente a un array en JavaScript


- Es textual y facil de leer por humanos
- Es ligero (ocupa poco espacio)
- Es facil de parsear y generar -> JSON.parse() y JSON.stringify
- Es independiente del lenguaje aunque use convenciones de la sintaxis de JavaScript


////////////////////////
// Reglas de sintaxis

- Los datos estan en pares nombre/valor (clave / valor)
- Los datos estan separados por comas
- Las llaves {} representan objetos
- Los corchetes [] representan arrays
- Las comillas dobles son obligatorias para nombres de propiedades y strings


////////////////////////
// Tipos de datos en JSON

- Strings: "texto"
- Numbers: 42 o 3.14
- Booleans: true o false
- Objects: { "clave": "valor" }
- Arrays: ["valor1", "valor2"]


/////////////////////////
// Usos comunes de JSON

1. Comunicacion cliente-servidor
- JSON es el formato estandar para APIs Rest*

* ¿Qué es una API REST?

    Una API REST (Representational State Transfer) es un estilo arquitectónico para diseñar servicios web que permiten la comunicación y transferencia de datos entre diferentes sistemas a través de Internet Se basa en el protocolo HTTP y utiliza métodos estándar como GET, POST, PUT y DELETE para realizar operaciones de creación, lectura, actualización y eliminación (CRUD) sobre recursos Cada recurso en una API REST está identificado por una URL única, y las solicitudes y respuestas suelen intercambiarse en formato JSON, que es legible tanto para humanos como para máquinas


    En esencia, una API REST actúa como una interfaz que permite a aplicaciones externas acceder a datos o funcionalidades de manera controlada y predefinida, facilitando la integración entre sistemas, la automatización de tareas y el desarrollo de ecosistemas de software Es ampliamente utilizada en servicios web, microservicios, aplicaciones móviles y plataformas en la nube debido a su simplicidad y compatibilidad con múltiples lenguajes de programación
*/

/*
// Ej 1: Enviar datos (POST) al servidor
fetch("/api/usuarios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: "Gabi",
        ocupacion: "Programador web"
    })
});

// Recibir datos del servidor
fetch("/api/usuarios")
    .then(response => response.json()) // Este metodo convierte el texto plano JSON en objetos JS
    .then(data => console.log(data));
*/


// 2. Almacenamiento local: Guardar datos en el navegador
let usuario = { nombre: "Juan", edad: 30 };

// Guardar 
localStorage.setItem("usuario", JSON.stringify(usuario));

// Leer
let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));


// 3. Configuraciones: Muchas herramientas usan JSON para configuraciones como package.json en Node.js



/*===================================================
    Herramientas de JavaScript para asincronia
=====================================================

1. Callbacks: Funciones que se pasan como argumento para ejecutarse despues de completar una operacion

    - Ventajas: Flexibilidad
    - Desventajas: Callback hell


2. Promises: Objecto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Sus estados son:

    - pending (pendiente)
    - fulfilled (completada)
    - rejected (rechazada)


fetch() NO es una promesa, pero devuelve una promesa
fetch() es una API Web que permite realizar operaciones HTTP y devuelven una Promesa

Una promesa es un objeto que representa el resultado FUTURO de una operacion asincrona


fetch es una funcion web API que devuelve una promesa y siempre trabaja de forma asincrona

Promise es un objeto nativo de JS, puede ser usada en fetch y controla valores futuros
*/
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hecho");
    }, 1000);
});

promesa.then(resultado => console.log(resultado));



/*========================
    fetch en JavaScript
==========================

fetch() es una funcion incorporada (nativa) en los navegadores modernos que permite realizar peticiones HTTP y HTTPS de forma asincrona utilizando promesas

forma parte de las Web APIs proporcionadas por el navegador, no del lenguaje JavaScript en si

fue introducida como parte del Fetch API para reemplazar al viejo y complejo XMLHttpRequest


Caracteristicas tecnicas

    - Devuelve un objeto Promise que se resuelve con un objeto Response
    - Usa el estandar HTTP: metodos como GET, POST, PUT, DELETE, etc
    - Funciona muy bien con async/await
    - Es mas limpia y moderna que XMLHttpRequest
    - Soporta CORS, cabeceras, envio de JSON y mas


Sintaxis basica

    fetch(url, options)
        .then(response => {
            // Respuesta cruda del servidor
        })
        .catch(error => {
            // Error de red o fallo total
        });

    Parametros:
        - url: string, la URL a la que queremos hacer la solicitud
        - options: opcional, objeto que especifica configuracion adicional como metodo, cabeceras, cuerpo, etc
*/
/*
fetch("http://api.example.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        titulo: "Hola",
        contenido: "Esto es un post"
    })
})
    .then(response => response.json())
    .then(data => console.log("Respuesta del servidor:", data))
    .catch(error => console.error("Error:", error));
*/

/* El objeto Response

- La promesa devuelta por fetch() se resuelve con un objeto Response, que tiene:

    - .ok -> booleano (true si status esta entre 200 y 299)
    - .status -> Codigo HTTP (200, 404, etc)
    - .statusText -> texto del estado ("OK", "Not Found")
    - .headers -> cabeceras de la respuesta
    - .json(), .text() para leer el contenido de la respuesta


Ojo con el manejo de errores!

- fetch solo rechaza la promesa en errores de red reales (no hay internet o el servidor esta caido)

- no rechaza en codigos de error HTTP (404 o 500), por eso, a mayores debemos revisar el response.ok
*/

/*=========================
    async/await
===========================

async/await es azucar sintactico o "syntatic sugar", basicamente una manera mas breve y mas sencilla de leer y entender Promises.

async/await se introduce en EcmaScript 2017 y nos permite escribir codigo asincrono con una sintaxis similar al codigo sincrona

El objeto es hacer el manejo de la asincronia mas legible, estructurado y facil de depurar


//////////////////////
// Como funciona async?

La palabra clave async se usa para declarar una funcion asincrona, la cual siempre devuelve una Promesa, aunque el valor retornado no lo sea
*/

async function saludar() {
    return "Holis";
}

saludar().then(console.log); // En este ejemplo, aunque saludar retorna un string, en realidad devuelve una Promise que se resuelve con ese valor


/*////////////////////
// Que hace await?

La palabra clave await pausa la ejecucion de la funcion asnyc hasta que una Promesa sea resuelta (fulfilled) o rechazada (rejected)

await solo puede usarse dentro de funciones asnyc




///////////////////////
// Promesas vs async/await

// Con Promesas (encadenamiento .then)
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


// Con async/await

async function obtener() {

    try {
        const res = await fetch("url");
        const data = await res.json()l
        console.log(data);

    } catch(error) {
     console.error(error)
    }
}


Ventajas de asnyc/await con respecto a Promises (encadenamiento .then)

    - async/await es mas legible y secuencial
    - Mejor manejo de errores con try/catch
    - Ideal para flujos largos y complejos de asincronia
*/

async function obtenerDatos() {
    try {

        // Hacemos una solicitud a esta URL para traer todo el choclo de datos
        // Con await, esperamos a recibir todo el choclamen JSON
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        // El codigo despues de await no se ejecuta hasta que la promesa sea resuelta

        // Convertimos el texto plano en JSON en objetos JS
        const data = await res.json();

        console.table(data);

    } catch(error) {
        console.error(error);
    }
}

/* Internamente await

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

1. Evalua la expresion que devuelve una promesa
2. Suspende la ejecucion de la funcion hasta que la promesa se resuelva o rechace


    const data = await res.json();
3. Si se resuelve, continua con el valor


    } catch(error) {
        console.error(error);
    }
4. Si se rechaza, lanza un error que puede ser atrapado por try ... catch


*/

// obtenerDatos();


// Podemos ejecuitar promesas en paralelo, si no hay dependencia entre las promesas, usamos Promise.all()
/*
async function cargarTodo() {
    const [usuarios, posts] = await Promise.all([
        obtenerUsuarios(),
        obtenerPosts()
    ]);
    console.log(usuarios, posts);
}
*/

// TO DO, ejercicio sugerido, completen esto, encadenando las funciones asincronas obtenerUsuarios y obtenerPosts y unifiquenlas en esta llamada de Promise.all



/*================
    try/catch
==================

try ... catch es una estructura de control utilizada para capturar y manejar errores que ocurren durante la ejecucion de bloques de codigo.

Esta tecnica forma parte del manejo de excepciones en JavaScript

Su objetivo es evitar que errores inesperados detengan la ejecucion del programa y en su lugar, manejar dichos errores de forma controlada.


Sintaxis

    try {
        // Bloque de codigo que puede lanzar errores

    } catch(error) {
        // Codigo para manejar el error 

    } finally {
        // Codigo que se ejecuta siempre con o sin error 
    }


Que errores puede capturar try...catch? captura errores en tiempo de ejecicion (runtime) como:

    - Acceso a variables no definidas
    - Llamadas a funciones inexistentes
    - Errores lanzados con throw
    - Problemas en funciones como JSON.parse()
    - NO captura errores de sintaxis, porque estos impiden que el codigo siquiera se ejecute


Ojo con usar try...catch en exceso

    - Puede ocultar errores reales si no se maneja correctamente
    - Tiene costo de rendimiento, especialmente en bucles
    - Es mejor usarlo en secciones donde hay RIESGO REAL DE ERROR (I/O, parsing, red, etc)


Buenas prácticas del try...catch

    - No atrapemos errores que no podemos manejar
    - Usemos try..catch donde esperamos errores (parseo de datos, llamadas a APIs)
    - Usemos finally para cerrar recursos, limpiar o terminar tareas (conexiones, indicadores de carga, etc)
    - Siempre proporcionemos informacion util en el error (err.message)


En resumen

    - try: Ejecuta codigo que puede lanzar errores

    - catch: Captura y maneja el error
    
    - finally: Codigo que se ejecuta siempre, con o sin error

    - throw: Lanza errores manualmente

    - error: Objeto con informacion del error

    - Uso ideal: I/O, llamadas a red, parsing, validacion, async/await
*/

try {

    let resultado = 10 / 0;

    // Este valor Infinity representa el infinito matemático y es mayor que cualquier número
    console.log(resultado); // Infinity

    // Podemos lanzar nuestros propios errores con throw, util para validaciones o control de flujo

    throw new Error("Error personalizado, no se puede dividir entre 0"); // Estamos grabando este mensaje en el message del objeto Error
    
} catch(e) {
    console.error("Ocurrio un error:", e.message);

} finally { // Finally aca esta simplemente para que veamos que esto siempre se ejecuta, haya errores o no
    console.log("Esto se ejecuta siempre");
}

/* Como funciona internamente?

    1. El bloque try se ejecuta normalmente

    2. Si ocurre un error dentro del try, se DETIENE INMEDIATAMENTE la ejecucion y pasa al bloque catch

    3. El objeto de error (por convencion llamado error, err, e) contiene informacion como
        
        .name:      tipo de error (TypeError, ReferenceError, etc)
        .message:   mensaje descriptivo

    4. El bloque finally, si existe (es opcional), siempre se ejecuta, ocurra o no un error
*/