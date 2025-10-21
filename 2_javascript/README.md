# UTN25Cuatri2_334 :frog:

# JavaScript :scroll:

### Temas recomendados
- One Dark Pro
- gruvbox

---

### Notas clase

- [Explicacion de arquitectura de software](https://es.wikipedia.org/wiki/Arquitectura_de_software)

---

### Enlaces recomendados
- [let vs const en JavaScript](https://stackoverflow.com/questions/41086633/in-javascript-why-should-i-usually-prefer-const-to-let)
- [online gdb Emma](https://onlinegdb.com/jlYqu0DPFR)

---

### Online GDB maquetando el portfolio
- [HTML](https://onlinegdb.com/nxOnne9fJ)
- [CSS](https://onlinegdb.com/Y2RD1oosZW)


---

### Notas

- Terminar asyc/await en Js VIII
- Saltar a ver Node.js

---


### Guia Git
#### [Machetes de git](https://drive.google.com/drive/u/1/folders/1T1LEYs_H-NACabUJcdTXjodw8il6ZDsf)

1. [Instalar git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)

2. Clonar un repo que creamos en github
```sh
git clone https://gitlab.com/profexabi/UTN25Cuatri2_334.git
```

3. Trabajar sobre ese repo

4. (Primera vez que usamos) Indicamos nuestro nombre de usuario e email
```sh
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com" # Mismo email que tengamos en github

# Podemos ver donde tenemos almacenado el repo (podemos tener un mismo repo en distintos lugares, github, gitlab, bitbucket)
git remote -v

# Podemos cambiar el nombre de nuestro remoto
git remote rename origin github # cambiamos el nombre por defecto de origin a github

# Podemos tambien añadir otros remotos con el comando
# git remote add gitlab https://gitlab.com/profexabi/UTN25Cuatri2_334.git
```

5. Chequeamos los cambios en nuestro repo
```sh
git status
```

6. Guardo todos los cambios 
```sh
git add .
```

7. Registro los cambios
```sh
git commit -m "Descripcion brevisima de los cambios"
```

8. Envio los cambios a git
```sh
# git push nombreRepo nombreRama
git push origin main
```

#### Extra
- *Registrar versiones en git*
```sh
git tag -a v1.4 -m "mi version 1.4"
```

---

# Guia JavaScript

## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch
- [Clase 13/10/25](https://youtu.be/_C7BRSO93gw)

```js
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
```

## EXTRA, que es una API Rest?

#### 1. Pensemos en una pagina HTML, CSS y JS donde tengo 4 pestañas

- Consultar productos -> `consultar.html`
- Crear productos -> `crear.html`
- Actualizar productos -> `actualizar.html`
- Eliminar productos -> `eliminar.html`
    
#### 2. Ahora accedemos a la pagina consultar.html

Internamente, JavaScript va a hacer la siguiente solicitud GET (una peticion a una URL)

```js
// Tomemos como referencia la siguiente peticion fetch
// Hacemos una solicitud a esta URL para traer todo el choclo de datos
fetch("https://jsonplaceholder.typicode.com/users")

    // Convertimos el texto plano en JSON en objetos JS
    .then(res => res.json()) // 1. Esta peticion HTTP se resuelve con una Response (respuesta del servidor)

    // Una vez que tenemos procesados nuestros datos, ahora como objetos JS, los mostramos
    .then(data =>  {
        console.table(data)
        // innerHTML, etc
    })

    .catch(error => console.error(error)); // 2. O se rechaza si hay un error de red
```

#### 3. Por que podemos acceder a este array de objetos de usuarios desde una URL?

Porque desde el backend, usando Node.js y su framework Express.js, que utilizan el lenguaje de programacion JavaScript. **Nosotros creamos una API Rest**

*Que significa crear una API Rest?*
Significa crear la funcionalidad para permitir consultar, crear, modificar y eliminar recursos a traves de una URL. Es decir, le damos a nuestra pagina web, la posibilidad de realizar acciones con una URL para interactuar con la Base de Datos.

Para esto, instalamos desde Node.js, el [framework Express.js para crear servidores web](https://www.npmjs.com/package/express)

En Express.js, tenemos el siguiente codigo

```js
import express from "express"; // Despues de instalar, importamos el framework Express

const app = express(); // Creamos una variable app, instancia de la aplicacion Express, nos va a permitir usar todos los metodos que trae Express


// Creamos un endpoint (url), un punto de salida de informacion
// http://localhost:3000/users

// Enpoint para mostrar todos los usuarios (esta es la URL y las acciones que hace cuando usamos fetch desde el navegador)
app.get("/users",  async (req, res) => {
    try {

        // Una vez, escuchada una solicitud get a nuestra url http://localhost:3000/users, creamos esta sentencia SQL
        const [rows] = await connection.query("SELECT * FROM users");

        // Ahora que guardamos los resultados de esta peticion a la Base de Datos, se la devolvemos al cliente (al navegador que hizo esta peticion fetch) en formato JSON
        res.status(200).json({
            resultado: rows;
        })

    } catch (error) {
        console.error("Error obteniendo usuarios", error.message);

        res.status(500).json({
            error: "Error interno al obtener usuarios"
        });
    }
});



// Endpoint para crear un producto (esta va a ser la URL con la que, especificando una solicitud POST, vamos a crear un nuevo producto)
app.post("/products", async (req, res) => {
    try {

        let { categoria, ruta_img, nombre, precio } = req.body; // Recogemos esta informacion del formulario HTML

        // Enviamos a la BBDD esta consulta para crear un nuevo producto
        let [rows] = await connection.query(`
            INSERT INTO PRODUCTS (categoria, ruta_img, nombre, precio) 
            VALUES (${categoria}, ${ruta_img}, ${nombre}, ${precio})`);

        // Le damos una respuesta positiva al cliente
        res.status(201).json({
            mensaje: "Producto creado con exito"
        });


    } catch(error) {
        console.error("Error creando productos", error.message);

        res.status(500).json({
            error: "Error interno al crear usuarios"
        });
    }
});


app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
})
```



---

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis

- [Clase grabada JS VII parte 1](https://youtu.be/3-TLK2UpBas)
- [Clase grabada JS VII parte 2](https://youtu.be/QyDQ2TerA6k)

```js
/*==============
    Callbacks
================
Funciones que se pasan como argumentos a otras funciones para ser ejecutadas despues */


// Ejemplo 1 -> Callback
function procesarDatos(datos, callback) {
    console.log("Procesando datos..."); // Procesando datos...

    const resultado = datos.toUpperCase(); // HOLA MUNDO

    callback(resultado); // Ejecuta la funcion callback y le pasa como parametro a la funcion "HOLA MUNDO"
}

procesarDatos("hola mundo", (res) => {
    console.log(`Resultado: ${res}`); // Resultado: HOLA MUNDO
});



/* Un callback es una funcion que se pasa como argumento a otra funcion y que se ejecuta despues de que algo haya ocurrido. Es como decirle a una funcion:

    "Cuando termines de hacer tu trabajo, llamás a esta otra función"


Para que se usan los callbacks?

    - Permiten ejecutar codigo despues de una tarea
    - Manejo de tareas asincronicas (como leer archivos o pedir datos a un servidor)
    - Hacer el codigo mas flexible y reutilizable
*/

// Ejemplo 2 -> Callback muy parecido al anterior
function saludar (nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarUsuario(nombre, callback) {
    // Hacemos algo con el nombre

    callback(nombre); // Llamamos al callback
}

procesarUsuario("Pedro", saludar); // Hola, Pedro

/* Que pasó acá?

1. saludar es una funcion que saluda a alguien

2. procesarUsuario recibe un nombre y una funcion callback

3. Cuando termina de procesar el nombre, llama a saludar(nombre)
*/


// Ejemplo 3 -> Callback
console.log("Inicio");

// setTimeout recibe una funcion callback que se ejecutara despues de 2 segundos
setTimeout(() => {
    console.log("Esto se muestra despues de 2 segundos");
}, 2000); // Es una forma comun de usar callbacks con funciones asincronicas

console.log("Fin");


/* En resumen:

    - Callback: Una funcion que se pasa como argumento a otra funcion

    - Uso: Ejecutar codigo despues de una accion o de forma personalizada

    - Ejemplos: setTimeout, addEventListener, funciones que reciben otras funciones



===================================================
    Caracteristicas principales de los callbacks
===================================================

1. Funciones de primera clase

En JavaScript, las funciones son "ciudadanos de primera clase", lo que significa que las funciones puede ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

// Asignar una funcion a una variable
const miCallback = function() {
    console.log("Callback ejecutado");
}

// Pasar como argumento
function ejecutarCallback(callback) {
    callback();
}

ejecutarCallback(miCallback); // Callback ejecutado


// 2. Sincronia vs Asincronia

// Ejemplo callback sincrono
function procesoPesado(callback) {
    console.log("Iniciando proceso");

    // Simulamos un procesamiento de datos
    for (let i = 0; i < 1000; i++) {
        callback();
    }
}

/*
procesoPesado(function() {
    console.log("Proceso completado")
});

console.log("Esto se ejecuta despues del callback");
*/

// Ejemplo callback asincrono (se ejecuta en paralelo)
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    setTimeout(function() {
        callback();
    }, 2000);
}

procesoAsincrono(function() {
    console.log("Proceso asincrono completado");
});


console.log("Esto se ejecuta inmediatamente");



////////////////////////////////////////
// Casos de uso comunes de callbacks //


/////////////////////
// 1. Temporizadores (timers)
setTimeout(function() { // setTimeout se ejecuta una sola vez
    console.log("Esto se va a ejecutar dentro de 3 segundos");
}, 3000);


// setInterval es un setTimeout que se repite
// setInterval se ejecuta a intervalos (la funcion se repite cada x segundos)
let contador = 0;
const intervalo = setInterval(function() {
    contador++;
    console.log(`Contador: ${contador}`);

    if(contador === 5) {
        clearInterval(intervalo);
    }
}, 1000);





/////////////////////
// 2. Eventos del DOM
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function(event) {
    console.log(`Boton clickeado`, event.target);
});




/////////////////////
// 3. Operaciones con arrays
const numeross = [1, 2, 3, 4, 5];

// forEach
numeross.forEach(function(num, indice) {
    console.log(`Indice: ${indice}, valor: ${num}`);
});


// forEach 2
console.log("Testeando 3er parametro del forEach");
numeross.forEach(function(num, index, arr) {
    arr[index] = num + 10;
});

console.log(numeross);


// map
const duplicados = numeross.map(function(num) {
    return num * 2;
});

console.log(duplicados);




/////////////////////
// 4. Peticiones HTTP

// Ver ejemplo de peticion con fetch mas abajo





/////////////////////
// 5. Lectura de Archivos (Node.js) -> Lo vemos mas adelante en Node.js
/*
const fs = require("fs");

// Lectura asincrona
fs.readFile("saludos.txt", "utf-8", function(error, contenido) {
    if (error) {
        console.error("Error leyendo archivo", error);
        return;
    }

    console.log("Contenido del archivo: ", contenido)
});
*/

/* 
Ventajas de los callbacks:
    - Simplicidad: Facil de entender para operaciones simples
    - Universalidad: Compatible con todos los navegadores
    - Flexibilidad: Permiten crear codigo reutilizable


Desventajas de los callbacks:
    - Callback Hell: Anidamiento excesivo que dificulta la lectura
    - Manejo de errores: Complicado con callbacks anidados
    - Flujo de control: Dificil de seguir con operaciones complejas


Alternativas modernas:

- Promesas: .then().catch()
- Async/await: Sintaxis mas limpia y legible
*/






/* ======================================
    Diferencias entre HOF y Callbacks
=========================================

1. Callback: Es simplemente una funcion que le pasamos como argumento a otra funcion y que sera llamada en algun momento dentro de esa funcion.
Es el uso concreto de pasar una funcion como parametro
*/

function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario: ${nombre}`);
    callback(nombre);
}


// El callback aca es -> function(n) { console.log(`Bienvenido ${n}`); }

procesarUsuario("Mateo", function(n) {
    console.log(`Bienvenido ${n}`);
});


/* 2. High Order Function: Es una funcion que cumple AL MENOS UNA de estas dos condiciones:

    - Recibe una o mas funciones como argumentos (map, filter, reduce)
    - Devuelve una funcion como resultado
*/

// const numeross = [1, 2, 3, 4, 5];

// Caso 1: Recibe una funcion
const cuadradoss = numeross.map(n => n * n); // map es una HOF porque recibe un callback como argumento
console.log(cuadradoss);



// Caso 2: Devuelve una funcion
function multiplicador(factor) {
    return function(num) {
        return num * factor;
    }
}

const duplicar = multiplicador(2);
console.log(multiplicador); 
/* Retorna:

multiplicador(factor) {
    return function(num) {
        return num * factor;
    }
}
*/

console.log(duplicar);
/*
(num) {
        return num * factor;
    }
*/

console.log(duplicar(5)); // 10

/* En resumen:

- Callback: La funcion pasada como argumento
- High Order Function: Es la funcion que recibe o devuelve funciones

- Estan relacionadas pero no son equivalentes: Un callback es usando dentro de una HOF, pero no todas las HOF usan callbacks explicitamente porque pueden devolver funciones en lugar de recibirlas
*/








/*=========================================================
    High Order Functions o Funciones de Alto Nivel
===========================================================

Una funcion de orden superior es una funcion que puede hacer al menos una de estas dos cosas

    1. Recibir una o mas funciones como argumentos
    2. Devolver una funcion como resultado

En JavaScript las funciones son tratadas como "ciudadanos de primera clase" o first class citizens, esto significa que las funciones pueden ser asignadas a varaibels, pasadas como argumentos o retornadas desde otras funciones


Que nos permiten las High Order Functions
- Abstraccion: Permiten escribir codigo mas abstracto y reutilizable
- Composicion: Facilitan combinar funcionalidades pequeñas en logicas mas complejas
*/


// Ej 1. Aceptando una funcion como argumento
function funcionAltoNivel(callback) {
    console.log("Ejecutando la funcion de alto nivel");

    // Una vez que termine de ejecutar todo el codigo de esta funcion, ejecuta la otra que recibio por parametro

    callback(); // Llamada a la funcion callback
}

function funcionCallback() {
    console.log("Ejecutando la funcion callback");
}

funcionAltoNivel(funcionCallback);


// Ej 2. Funcion de alto nivel que devuelve una funcion
function crearSaludo(saludo) {

    // Devuelve una nueva funcion
    return function(nombre) {
        console.log(`${saludo}, ${nombre}`);
    }
}


// Creamos una funcion saludo
const saludaHola = crearSaludo("Hola");
saludaHola("Hernan");


// Creamos una funcion despedida
const saludaDespedida = crearSaludo("Adios");
console.log(saludaDespedida); // ƒ (nombre) { console.log(`${saludo}, ${nombre}`); }
saludaDespedida("Damian");



////////////////////////////////
// HOF comunes en JavaScript //

// forEach: Recorre todos los elementos de un array y ejecuta una funcion sobre cada uno

const numeros = [1, 2, 3, 4];
numeros.forEach(function(num) {
    console.log(num * 2);
});

// map: Crea un nuevo array aplicando una funcion a cada elemento del array original

const nums = [1, 2, 3];

const alCuadrado = numeros.map(n => n ** 2);
console.log(alCuadrado);

/* ====================
    Craneando el map
=======================

    const cuadrados = numeros.map(n => n * n);  

- map es un metodo de array y tambien una funcion de alto nivel

- se llama funcion de alto nivel, porque recibe como argumento otra funcion

- esta funcion que recibe se ejecuta una vez por cada elemento 

- a esa funcion que recibe map, la llamamos callback

en nuestro ejemplo, el callback es esto

es una funcion flecha con parametro n
    n => n * n


es el equivalente a escribirlo con function

function (n) {
    return n * n;
}


El callback en nuestro ejemplo es la funcion flecha
    n => n * n

que map invoca internamente para cada elemento del array
*/

const cuadrados = numeros.map(n => n * n);
console.log(cuadrados); // [1, 4, 9, 16]

// por dentro, map, hace algo parecido a:

function mapa (array, callback) {
    let nuevoArray = [];

    for (let i = 0; array.length; i++) {
        nuevoArray.push(callback(array[i], i, array))
    }
    return nuevoArray;
}

/* En nuestro caso, lo que sucede es

- Iteracion 1 -> callback(1) -> 1 * 1 = 1
- Iteracion 2 -> callback(2) -> 2 * 2 = 4
*/


// filter: Crea un nuevo array con los elementos que cumplen una condicion
// const numeros = [1, 2, 3, 4];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);


// reduce: Acumula los valores del array en un solo valor, segun una funcion reductora

// sort: Ordena los elementos de un array segun una funcion de comparacion

// find: Devuelve el primer elemento del arary que cumple una condicion
const frutas = ["manzana", "banana", "cereza"];

const frutaEncontrada = frutas.find(f => f.startsWith("b"));
console.log(frutaEncontrada);





/* ========================
    Destructuring
===========================
El destructuring es una herramienta moderna que nos permite escribir codigo mas limpio, mas corto y mas claro
Es una forma de "descomponer" estructuras de datos como arrays y objetos en variables individuales, sin necesidad de acceder manualmente a cada elemento o propiedad

Por que usar destructuring?
- Mejora la legibilidad del codigo
- Facilita el acceso rapido a datos de estructuras complejas
- Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

console.log("DESTRUCTURING \n");

////////////////////////
// Sin destructuring //
const numerosss = [1, 2, 3];
let uno = numerosss[0];
let dos = numerosss[1];
console.log(uno, dos);

const persona = { nombre: "Anibal", edad: 40 };
let nom = persona.nombre;
let ed = persona.edad;


////////////////////////
// Con destructuring //
let [primero, segundo] = numerosss;
console.log(primero, segundo);

let {nombre, edad} = persona;
console.log(nombre, edad);

// Asignamos a nuevas variables
let alumno = { nombre: "Emiliano", edad: 35 };
let { nombre: n, edad: e} = alumno;
console.log(n, e); // Emiliano 35

// Destructuring en parametros de funcion
function saludar({nombre, edad}) {
    console.log(`Hola ${nombre}, tenes ${edad} años`);
}

saludar(alumno); // Hola Emiliano, tenes 35 años


// Destructuring de arrays con valores omitidos
let [prim, ,terc] = [10, 20, 30];
console.log(prim, terc); // 10 30


// Rest operator con destructuring
let [a, ...resto] = [1, 2, 3, 4];
console.log(a); // 1
console.log(resto); // [2, 3, 4]


let { nombr, ...otros } = { nombr: "Gabi", edad: 25, pais: "Argentina"};
console.log(otros); // {edad: 25, pais: 'Argentina'}





/* ========================
    Spread Operator
===========================
El spread operator o operador de propagacion en JavaScript -> ...
es una sintaxis introducida en ES6 que permite descomponer en elementos iterables (como arrays, strings y objetos) en elementos individuales.

Su principal funcion es copiar, combinar o expandir estructuras de datos de manera eficiente. Nos permite

    - Manipulacion de arrays (copiar, concatenar)
    - Combinar objetos (inmutabilidad, mezcla de propiedades)
    - Paso de argumentos a funciones (reemplazo de apply())
*/

console.log("SPREAD OPERATOR");

// Copia superficial: No es una referencia, los cambios en copia no afectan a original
let original = [1, 2, 3];
let copia = [...original];
console.log(copia); // [1, 2, 3]


// Concatenar arrays: Mucho mas eficiente que concat(), mejor rendimiento en motores modernos
let arr1 = [1, 2];
let arr2 = [3, 4];

let combinado = [...arr1, ...arr2]; 
console.log(combinado); // [1, 2, 3, 4]


// Convierte strings en arrays sin usar split()
let string = "Holis";
let caracteres = [...string];
console.log(caracteres); // ['H', 'o', 'l', 'i', 's']


// Combinacion de objetos
let defaults = { tema: "oscuro", fontSize: 14 };
let configUser = { fontSize: 18 };
let configFinal = {...defaults, ...configUser};
console.log(configFinal); // {tema: 'oscuro', fontSize: 18}



// Spread operator en funciones, pasando argumentos desde un array
function sum (a, b, c, d) { return a + b + c + d};
let numsRandom = [1, 2, 3, 4];
console.log(sum(...numsRandom));



// Recogemos argumentos restantes (rest parameters)
function logArgs(first, ...rest) {
    console.log(first); // a
    console.log(rest); // b c
}

logArgs("a", "b", "c");







/*======================
    Funciones anidadas
========================
Son simplemente funciones definidas dentro de otras funciones.
Es decir, una funcion interna que vive en el scope de una funcion externa

Una funcion anidada es una funcion que:
    - Se declara dentro de otra funcion
    - Tiene acceso a todas las variables y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar logica o crear closures


Ejemplo basico de funcion anidada

    - construirMensaje() esta anidada dentro de saludar()
    - Tiene acceso a nombre, aunque esa variable no esta definida dentro de ella
    - Esto es posible gracias al scope lexico de JavaScript


Consideraciones:
    - Las funciones anidadas no estan disponibles fuera del scope donde se definen
    - Demasiadas funciones anidadas pueden dificultar la legibilidad si no estan bien organizadas

*/
function saludar(nombre) {

    function construirMensaje() {
        return `Hola ${nombre}`;
    }

    return construirMensaje();
}

console.log(saludar("Emiliano"));

// Alcance de funciones anidadas: Heredan el entorno lexico (lexical scope) de la funcion que las contiene. Pueden acceder a las variables de la funcion externa pero no al reves

function externa() {
    let mensaje = "Hola desde fuera";

    function interna() {
        console.log(mensaje);
    }

    interna();
}

externa(); // Hola desde fuera



// Ejemplo de procesamiento de texto
// 1. Organizacion de codigo: En vez de escribir una gran funcion, se puedne definir sub-funciones internas para modularizar la logica
function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length; // este regex trata todos los espacios como 1 solo espacio
    }

    let limpio = limpiar(texto);

    return contarPalabras(limpio);
}

console.log("Numero palabras:");
console.log(procesarTexto(" Holiiiii        QUE ONDI los pibardos de la 334          "));


/*====================
    Closures
======================
Una closure es una funcion que recuerda el entorno (scope) en el que fue creada, incluso despues de que ese entorno haya finalizado su ejecucion

Esto significa que una funcion interna puede acceder a las variables de su funcion externa incluso despues de que esta haya terminado de ejecutarse

Cada vez que creamos una funcion dentro de otra funcion, se crea una closure. La funcion interna captura las variables de su entorno externo y mantiene una referencia a ellas, no una copia
*/

console.log("CLOSURES");

function crearContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    }
}

let contar = crearContador();

console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3
console.log(contar()); // 4
console.log(contar()); // 5

/* Que pasa aca?

- crearContador() retorna una funcion interna anonima

- Esta funcion recuerda la variable contador, aunque crearContador() ya termino su ejecucion

- Cada vez que llamamos a contar(), estamos invocando la misma closure que mantiene su propio estado interno


Por que son utiles las closures?

    - Permiten recordar valores sin usar variables globales
    - Crear funciones privadas
    - Hacer el codigo mas limpio y modular*/





/* =======================
    Callback Hell
==========================

Que hace setTimeout?
- Es una funcion que acepta un callback (una funcion a ejecutar)
- No detiene la ejecucion del codigo. En su lugar, el callback se ejecuta despues del tiempo indicado

    setTimeout(() => {
        console.log("Esto se muestra despues de 2 segundos");
    }, 2000); // Es una forma comun de usar callbacks con funciones asincronicas

    console.log("Fin");
*/

// Callbacks sincronicos: Se ejecutan inmeditamente dentro del mismo ciclo de 
[1, 2, 3].forEach(function(n) {
    console.log(n);
});


// Callbacks asincronicos: Se ejecutan despues de un tiempo o de que termine una operacion externa. Son fundamentales en la programacion asincronica

setTimeout(() => {
    console.log("Tarea asincronica completada")
}, 1000);


/*
JavaScript es un lenguaje orientado a eventos y asincronico

JavaScript fue diseñado para ejecutarse en el navegador, donde muchas operaciones (peticiones HTTP, leer archivos, esperar clicks del usuario) son asincronnicas

No queremos que el programa se detenga esperando estas tareas, en su lugar, registramos una funcion callback que se ejecutara mas adelante, cuando la tarea termine


Ventajas de los callbacks

- Permiten la modularidad del codigo (pasar funciones como argumentos)
- Permiten CONTROLAR EL FLUJO en entornos asincronicos
- Son la BASE DE ABSTRACCIONES MAS COMPLEJAS como promesas y async/await


Problemas comunes: Callback Hell

- Referencia del hadouken que pasa con el callback hell -> https://blog.da2k.com.br/uploads/2015/03/hadouken.jpg
- Un callback hell ocurre cuando tenemos muchas funciones anidadas dentro de otras, especialmente con tareas asincronicas (leer archivos, esperar respuestas del servidor, etc)

Esto hace que el codigo sea:

1. Dificil de leer
2. Dificil de mantener
3. Facil de romper
*/

// Cada setTimeout depende del anterior. El codigo funciona, pero es feo y poco manejable
setTimeout(() => {

    console.log("Paso 1");

    setTimeout(() => {
        console.log("Paso 2");

        setTimeout(() => {
            console.log("Paso 3");

            setTimeout(() => {
                console.log("Paso 4");
            }, 1000)

        }, 1000)

    }, 1000)

}, 1000);





/* // Como solucionamos el maldito Callback Hell?

- Callback hell: Muchas funciones anidadas que hacen el codigo ilegible
- Uso excesivo de callbacks en tareas asincronicas
- Solucion: Usar Promises o async/await para una mejor estructura

Solucion 1: Usando promises

hacerAlgo()
    .then(res1 => hacerAlgoMas(res1))
    .then(res2 => continuar(res2))
    .then(res3 => terminar(res3))
    .then(() => console.log("Listo!"))
    .catch(error => console.error(error));
*/


/* Solucion 2: Usando async/await (mas moderno y legible)

async function ejecutarTareas() {

    try {

        const res1 = await hacerAlgo();

        const res2 = await hacerAlgoMas(res1);

        const res3 = await continuar(res2);

        await terminar(res3);

        console.log("Listo");
    
    } catch(error) {
        console.error(error); 
    }
} */


///////////////
// Promesas //

// Hacemos una solicitud a esta URL para traer todo el choclo de datos
fetch("https://jsonplaceholder.typicode.com/users")

    // Convertimos el texto plano en JSON en objetos JS
    .then(res => res.json())

    // Una vez que tenemos procesados nuestros datos, ahora como objetos JS, los mostramos
    .then(data => console.table(data))

    .catch(error => console.error(error));


//////////////////
// Async/Await //

async function obtenerDatos() {
    try {

        // Hacemos una solicitud a esta URL para traer todo el choclo de datos
        // Con await, esperamos a recibir todo el choclamen JSON
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")

        // Convertimos el texto plano en JSON en objetos JS
        const data = await res.json();

        console.table(data);

    } catch(error) {
        console.error(error);
    }
}

// obtenerDatos();




/*=========================
    Web APIs
===========================

- API (Aplication Programming Interface) o Interfaz de Programacion de Aplicaciones

- Una API es un conjunto de funciones y herramientas que podemos usar para interactuar con algo, sea el navegador, el servidor o una libreria

Una Web API
En el contexto del navegador (Firefox, Chrome, etc), una Web API es una funcion o conjunto de funciones que el navegador nos proporciona para que las usemos con JavaScript

JavaScript como lenguaje de programacion es muy basico. Pero cuando se ejecuta en un navegador, puede acceder a funcionalidades especiales que el navegador le proporciona:

    - Manipular el DOM (document.getElementById)
    - Temporizadores (setTimeout a setInterval)
    - Hacer peticiones HTTP (fetch)
    - Trabajar con audio, video, GPS, etc

Por que decimos que fetch es una API?
- fetch no es parte del lenguaje JavaScript puro
- Es una funcion que el navegador le da a JavaScript para que pueda hacer peticiones a servidores web
- Por eso decimos que es una Web API que el navegador expone


- JavaScript es el lenguaje
- Las Web APIs son funciones extra que el navegador le presta a JavaScript para hacer cosas utiles
- JavaScript usa estas APIs pero no son parte del lenguaje en si, las usa pero no las define


Resumen:
- API:      Conjunto de funciones para interactuar con algo
- Web API:  Funciones que el navegador le ofrece a JavaScript
- fetch:    Web API para hacer peticiones HTTP
- setTimeout: Web API para ejecutar codigo con demora
- JavaScript: Usa Web APIs pero no las define (las define el navegador)


Las Web APIs son herramientas que el navegador le da a JavaScript para interactuar con el entorno: HTML, red, audio, video, dispositivos, almacenamiento, etc

Tipos de Web APIs comunes

1. APIs del DOM (Document Object Model)
- Permiten acceder y modificar el HTML y CSS de la pagina
- Manipulacion de elementos, eventos, clases, estilos,etc

    - document.querySelector()
    - document.createElement()
    - document.addEventListener()
    - classList.add()


2. APIs de Red
- Permiten comunicarnos con servidores o cargar recursos
- Peticiones HTTP, chats, notificaciones en tiempo real

    -  fetch() -> Para realizar solicitudes HTTP
    - XMLHttpRequest -> Version mas antigua del fetch
    - WebSocket -> Comunicacion en tiempo real (chats)
    - EventSource -> Eventos Server-Sent (actualizaciones en tiempo real)


3. APIs de almacenamiento
- Guardar informacion en el navegador
- Guardar preferencias, datos de sesion, apps sin conexion, ble

    - localStorage()
    - sessionStorage()
    - Cookies (mediante document.cookie)
    - IndexedDB*

    * Qué es IndexedDB
    https://es.javascript.info/indexeddb

    IndexedDB es una API de JavaScript que permite el almacenamiento de grandes cantidades de datos estructurados en el navegador del usuario, funcionando como una base de datos NoSQL orientada a objetos  A diferencia de localStorage, que está limitado a pequeñas cantidades de datos, IndexedDB está diseñado para manejar volúmenes significativos de información, incluyendo archivos y blobs, y permite búsquedas de alto rendimiento mediante índices  Es una tecnología transaccional, lo que garantiza la integridad y consistencia de los datos durante operaciones como inserciones, actualizaciones y eliminaciones  Además, sigue la política de mismo origen, lo que significa que solo las páginas web del mismo dominio pueden acceder a los datos almacenados en una base de datos específica 


4. Timers o temporizadores
- Permiten ejecutar funciones luego de un cierto tiempo
- Retrasos, animaciones, poling

    - setTimeout()
    - setInterval()
    - clearTimeout() y clearInterval()


5. APIs de Dispositivos y Multimedia
- Interaccion con hardware o medios
- Apps, mobiles, camara, permisos, grabaciones, notificaciones

    - navigator.geolocation -> GPS
    - MediaDevices.getUserMedia() -> Microfono y camara
    - Notification -> Notificaciones del sistema
    - Battery API, Clipboard API -> Para interactuar con la bateria, con el sistema de copiar-pegar


6. APIs de Interfaz Grafica
- Controlan animaciones, graficos y visualizacion
- Juegos, visualizaciones, graficos dinamicos, etc

    - Canvas API
    - WebGL -> https://es.wikipedia.org/wiki/WebGL
    - Fullscreen API
    - Screen Orientation API


En resumen:

- JavaScript puro es simple
- Pero el navegador le da superpoderes con las Web APIs
- Estas APIs permiten que JavaScript haga cosas reales, como hablar con servidores, manipular la pagina, guardar datos, usar la camara, etc
*/
```

---

## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos
```js
/*=========================================================
    Manipulacion del DOM en JavaScript y Eventos
===========================================================

- DOM (Document Object Model o Modelo de Objetos del Documento) es una representacion en memoria de a estructura de una pagina web

- Cada etiqueta HTML es un nodo en el DOM

- El DOM permite que JavaScript modifique el contenido, la estructura y el estilo de una pagina


Ejemplo de estructura DOM____________

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Document</title>
    </head>
    
    <body>
        <h1>Bienvenidos</h1>
        <p>Esto es un parrafo</p>
    </body>
</html>


Este HTML seria representado en el DOM como una estructura en forma de arbol. document es el objeto que representa toda la pagina web

- Ejemplo de DOM: https://imgs.search.brave.com/8LMrmi5iV0v8ADDm8malIIK_tu2PHQtS-kz3C1qq6Fc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzVhL0RPTS1tb2Rl/bC5zdmc

Diagrama de arbol del DOM_____________

- document
    - html
        - head
            - title
        - body
            - h1
            - p



==================================
    Objeto global document
==================================
El objeto global `document` es la representación en JavaScript del documento HTML o XML cargado en el navegador, actuando como punto de entrada al contenido de la página web y al árbol del Modelo de Objetos del Documento (DOM)  Este objeto proporciona funcionalidad global para el documento, permitiendo acceder y manipular elementos, propiedades y métodos relacionados con la página, como obtener la URL del documento o crear nuevos elementos  Aunque se considera global, su acceso se realiza a través del objeto `window`, que es el objeto global en entornos de navegador, por lo que en muchos casos se puede omitir el prefijo `window` al referirse a `document`  El objeto `document` hereda de la interfaz `Node` y, en el caso de documentos HTML, también implementa la interfaz `HTMLDocument`, lo que le permite acceder a funcionalidades específicas del tipo de documento 



Y como funciona la manipulacion del DOM?_____

- JavaScript puede acceder y modificar cualquier elemento del DOM utilizando el objeto global document

- JavaScript puede
    - Modificar el contenido (texto, atributos, clases)
    - Añadir o elminar elementos del DOM
    - Escuchar eventos de usuario (clicks, teclas, etc)



===========================================
    Seleccion de elementos en el DOM
========================================*/

// getElementById()
// Es un metodo que selecciona un unico elemento por su id (de no encontrar devuelve null)

// Seleccionamos nuestro elemento con id="titulo"
let titulo = document.getElementById("titulo");

console.log(titulo);  // <h1 id="titulo">Titulo principal</h1>
console.log(titulo.textContent); // Titulo principal


// querySelector() querySelectorAll()
// querySelector: selecciona el PRIMER elemento que coincida con un selector CSS (etiqueta, .clase, #id)
// querySelectorAll: selecciona TODOS los elementos que coincidan con el selector CSS y devuelve una NodeList (similar a un array)

// Seleccionamos el primer elemento con class="mensaje"
let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent);


// Seleccionamos todos los elementos con class="mensaje"
let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos);
/*NodeList(2) [p.mensaje, p.mensaje]
    0: p.mensaje
    1: p.mensaje */

parrafos.forEach(parrafo => console.log(parrafo.textContent)); // Aguante la division 334   No me importa nada!

/* EXTRA

- getElementById(): Selecciona un elemento por su ID
- getElementsByClassName(): Selecciona todos los elementos con una clase especifica
- getElementsByTagName(): Selecciona todos los elementos de un tipo de etiqueta dado
- querySelector(): Selecciona el primer elemento que coincida con un selector CSS
- querySelectorAll(): Seleccipona todos los elementos que coincidan con un selector CSS


==============================================
    Modificacion de contenido y atributos
==============================================

Una vez seleccionado un elemento, podemos modificar su contenido, atributos o estilo:

    - textContent:  Modifica el texto dentro de un elemento
    - innerHTML:    Modifica el contenido HTML dentro de un elemento
    - setAttribute: Modifica los atributos de un elemento
    - style:        Permite cambiar el estilo CSS en linea de un elemento
*/

let parrafo = document.getElementById("parrafo");

// Cambiar el texto
parrafo.textContent = "Soy un parrafo que.. meh";

// Modificar el contenido HTML
parrafo.innerHTML = "<strong>Aguante la gramatica vieja!</strong>";

// Modificando el atributo id
let boton = document.getElementById("boton")

boton.setAttribute("id", "nuevoId");

// Cambiar el estilo
boton.style.backgroundColor = "green";
boton.style.color = "white";
boton.style.padding = "10px";

/* EXTRA

Apuntes tecnicos textContent vs innerHTML

- textContent: Devuelve solo el texto plano o reemplaza el texto interno. Es mas seguro y mas rapido
- innerHTML: Inserta HTML, puede ejecutar script y es mas lento porque tiene que parsear HTML

Otras alternativas para crear o insertar contenido en el DOM
Ademas de con innerHTML, podemos crear, insertar o elminar elementos del DOM para modificar la estructura de la pagina web en tiempo real:

    - createElement():  Crea un nuevo elemento HTML
    - appendChild():    Añadir un elemento como hijo de otra
    - removeChild():    Elimina un elemento hijo de su nodo padre




================================
    Eventos en JavaScript
================================

- Los eventos en JavaScript permiten a los desarrolladores detectar INTERACCIONES del usuario con la pagina web.

- Estos pueden ser desde un click en un boton, a mover el mouse, escribir en un campo de texto, etc.

- Los eventos son fundamentales para hacer que una pagina sea interactiva


Y que es un evento?_____________

Un evento es una señal que se envía cuando ocurre una interaccion o cambio en el documento, como un click, una pulsacion de tecla. 

JavaScript permite ESCUCHAR, estos eventos y EJECUTAR FUNCIONES especificas cuando ocurren, por ejemplo:

- Eventos de mouse:   click, dblclick, mouseover, mouseout, mousemove

- Eventos de teclado: keydown, keyup

- Eventos de form:    submit, change, input, focus

- Eventos de ventana: resize, scroll, load, unload
*/

// Escuchamos el evento click
boton.addEventListener("click", function() {
    console.log("Boton clickeado");
});


// Escuchar el evento de pulsacion de tecla
let input = document.getElementById("input");

/* Aca usamos event, que es un objeto que contiene TODOS los datos del evento 
    - Que tecla se presiono
    - Que boton hizo click
    - Coordenadas del mouse
    - Nos proporciona metodos clave como
        - stopPropagation() 
        - preventDefault()
*/

// Registramos cada tecla del evento cuando hacemos keydown
input.addEventListener("keydown", function(event) {
    // keydown se dispara cuando se presiona una tecla
    console.log(`Tecla presionada: ${event.key}`); // Hacemos un mapeo de cada tecla cuando la pulsamos (tambien podemos mapear el codigo de la tecla con event.code)
});


// Leer el valor completo de un campo de busqueda
let barraBusqueda = document.getElementById("barraBusqueda");

barraBusqueda.addEventListener("keyup", function() {
    // keyup se dispara cuando se libera una tecla
    let valorBusqueda = barraBusqueda.value;
    console.log(valorBusqueda);
});


/* ===============================
    Propagacion de eventos 
==================================

Cuando ocurre un evento, este se propaga a traves del DOM en dos fases

- Fase de captura, de arriba para abajo
- Fase de burbuja, de abajo para arriba

Podemos detener la propagacion de un evento usando el metodo event.stopPropagation
*/

/*
function sumar (a, b) {} // a y b son parametros
sumar(5, 6); // 5 y 6 son argumentos
*/

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchamos el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

// Escuchamos el click en el boton hijo
hijo.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Se hizo click en el boton hijo");
});


// Evitamos el envio por defecto de los formularios HTML
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario no enviado");
});




/* =================================
    Almacenamiento persistente 
====================================

El almacenamiento persistente hace que nuestras aplicaciones web pueden recordar informacion del usuario entre sesiones o durante la navegacion.

El navegador nos proporciona mecanismo para almacenar datos del lado del cliente.

- Cookies
- localStorage
- sessionStorage


================
    Cookies
================

Las cookies son pequeños fragmentos de informacion que se almacenan en el navegador del usuario y que se envían con cada peticion HTTP al servidor. Son más antiguas que localStorage y sessionStorage y fueron ampliamente usadas para mantener la sesion del usuario, guardar preferencias, etc

Caracteristicas de las cookies

    - Persistencia: Las cookies pueden tener una fecha de expiracion especifica. Si no se establece una expiracion, la cookie sera eliminada al cerrar la sesion del navegador

    - Envio al servidor: Las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util pero sobrecarga la red

    - Almacenamiento por origen (dominio y protocolo): Al igual que locaStorage y sessionStorage, las cookies estan asociadas a un dominio especifico

Uso principal

    - Autenticacion (tokens, sesion) 
    - Preferencias del usuario que deben ser enviadas al servidor
    - Seguimiento (tracking) de la actividad en la web

Caracteristicas tecnicas

    - Se envian automaticamente al servidor con cada solicitud HTP
    - Tamaño maximo de 4GB
    - Expiran segun una fecha determinada o duracion
    - Se pueden marcar como HttpOnly (accesibles solo desde el servidor) y Secure (solo sobre HTTP)


Explicacion W3Schools: https://www.w3schools.com/js/js_cookies.asp
*/

// A falta de una API web, podemos gestionar cookies usando el objeto document.cookie
document.cookie = "usuario=Pity; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

console.log(document.cookie);


// Ejemplo completo de una cookie de 7 dias de duracion
// Crear una cookie que expira en 7 días
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Obtener el valor de una cookie
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

// Establecer una cookie
setCookie("idioma", "es", 7);
// Leer una cookie
console.log(getCookie("idioma")); // Output: "es"



/* =========================
    localStorage
============================

localStorage es una API (funcionalidad extra) que permite almacenar datos de manera persistente en el navegador.

Los datos almacenados en localStorage no tienen una fecha de expiracion, por lo que estaran disponibles incluso despues de que el usuario cierre el navegador o apague la compu

Uso principal:

    - Guardar datos que deben perstir incluso al cerrar el navegador
    - Almacenar configuraciones de usuario, temas, carrito de compras, etc


Caracteristicas tecnicas:

    - Tamaño maximo: 5-10MB por dominio
    - Persistente, no tiene expiracion
    - Accesible solo desde JavaScript (no se envia al servidor)
    
Metodos de localStorage:

    - Guardar datos: localStorage.setItem(clave, valor)
    - Leer datos: localStorage.getItem(clave)
    - Eliminar un dato: localStorage.removeItem(clave)
    - Borrar todos los datos: localStorage.clear()



==========================
    Session storage
==========================

sessionStorage es una API similar a localStorage pero con una diferencia clave: los datos almacenados solo se mantienen durante la sesion del navegador. Cuando cerramos la pestaña o ventana del navegador, los datos se eliminan automáticamente.

Uso principal:

    - Guardar datos temporales mientras la pestaña del navegador este abierto
    - Información de formularios o pasos de navegacióon en una misma sesión

Características técnicas:

    - Tamaño similar a localStorage
    - Se borra al cerrar la pestaña
    - Solo es accesible desde JavaScript (no se envía al servidor)

Metodos de sessionStorage:

    - Guardar datos: sessionStorage.setItem(clave, valor)
    - Leer datos: sessionStorage.getItem(clave)
    - Eliminar un dato: sessionStorage.removeItem(clave)
    - Borrar todos los datos: sessionStorage.clear()



Consideraciones adicionales

    - Nunca guardemos información sensible, como contraseñas o tokens de autenticacion
    - En este caso, usemos cookies seguras con HttpOnly y Secure
*/

// Ejemplos tipicos de localStorage
localStorage.setItem("tema", "oscuro");
localStorage.setItem("idioma", "es");


// Creamos un objeto (o array de objeto si quisieramos)
let idoloTotal = {
    nombre: "Charly Garcia",
    ocupacion: "Idolo de rock",
    formacion: "Clasica",
    barrio: "Palermo"
}



// Creamos el item nombre en el local con el valor Charly
localStorage.setItem("nombre", "Charly");
console.log(localStorage.getItem("nombre"));


// Guardamos en una variable el valor de este item que almacenamos en el local
let nombre = localStorage.getItem("nombre");
console.log(nombre);


// Eliminamos un dato especifico
localStorage.removeItem("nombre");


// Limpiamos todo el localStorage
localStorage.clear();



console.log("1. Imprimimos nuestro objeto original:");
console.log(idoloTotal);

// Seteamos nuestro objeto o array de objetos como texto plano JSON (un formato standard de texto plano para el envio y recepcion de datos en la web)
console.log("2. Convertirmos nuestro objeto en texto plano para almacenarlo en el navegador");
let jsonIdoloTotal = JSON.stringify(idoloTotal); // De objeto a texto plano
console.log(jsonIdoloTotal);
localStorage.setItem("idolo", jsonIdoloTotal);

// Recuperamos de localStorage nuestro texto plano almacenado y lo convertimos en un objecto
console.log("3. Recuperamos nuestro objeto plano nuevamente en un objeto JS para poder manipularlo");
let idoloTotal_local = JSON.parse(jsonIdoloTotal); // De texto plano a objeto
console.log(idoloTotal_local);


// Cuando usar localStorage? Por ejemplo, para guardar un carrito de compras, donde le usuario selecciona productos y abandona la tienda, al volver, sus productos siguen ahi

// TO DO. Practica recomendada, guarden los productos de su carrito en el localStorage
```

---


## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

#### [Resumen y Guia referencia MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
```js
/*=========================================================
    Objetos globales en JavaScript: Navegador y Node.js
===========================================================

- Los objetos globales en JavaScript son aquellos que estan disponibles en todo el entorno de ejecucion.

- Su proposito es facilitar el acceso a ciertas funciones y valores predeterminados


En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript, como (Array, String, Object, etc), asi como un conjunto de objetos especifico para la interaccion con la pagina web y su entorno

===============
    window
===============
- el objeto global principal en el entorno de navegador.
- representa la ventana dle navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web
- todos los objetos, variables y funciones definidos en el ambito global, estan automaticamente disponibles como propiedades del objeto window
- Entre los objetos y metodos que provee window tenemos:*/

// document: Representa el DOM de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML. Es un subobjeto de window y representa el DOM de la pagina web, es la representacion estructural de la pagina HTML que permite acceder, modificar y manipular los elementos del documento

// alert, prompt y confirm : Permiten mostrar dialogos al usuario o cuadros para recibir input de este

// setTimeout y setInterval: Metodos para programar la ejecucion del codigo despues de un tiempo, con setTimeout o despues de un invervalo con setInterval
setTimeout(() => console.log("Hola despues de 1 segundo"), 1000);

// location: Proporicona info sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);

// navigator: Contiene informacion sobre el navegador, como la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);

// console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

// localStorage y sessionStorage: permiten almacenar datos en el navegador de forma persistente o temporal

// history: proporciona acceso al historia de navegacion del navegador


/*====================================
    Almacenamiento de datos en JS
======================================

En JavaScript, almacenar datos implica elegir la estructura adecuada de acuerdo con el tipo de informacion que se quiere guardar y como se desea manipular.

- Variables simples:    Para valores unicos como strings o numeros
- Objetos:              Para representar datos complejos con propiedades
- Arrays:               Para almacenar una lista de elementos, idealmente del mismo tipo
- Arrays de objetos:    Para manejar listas de elementos complejos que contienen multiples propiedades


Usaremos objetos cuando:
    - Queremos represnetar una entidad unica con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombre


Usaremos arrays simples cuando:
    - Querramos una lista ordenada de elementos individuales
    - Donde cada elemento no requiere atributos adicionales
    - Generalmente para almacenar datos del mismo tipo


Usaremos arrays de objetos
    - Queremos almacenar instancias del mismo tipo de entidad
    - Cuando tenemos una lista de entidades complejas, cada una con multiples propiedades
    - Podremos realizar operaciones en lote y mantener una coleccion de elementos relacionados de forma organizada

*/
// Almacenamos multiples objetos donde cada objeto tiene la misma estructura o contiene atributos similares
let personas = [
    { nombre: "Marta", edad: 20, ocupacion: "Ingeniera"},
    { nombre: "Marcos", edad: 25, ocupacion: "Diseñador"},
    { nombre: "Daniel", edad: 30, ocupacion: "Musico"}
];

console.log(personas[1]); // {nombre: 'Marcos', edad: 25, ocupacion: 'Diseñador'}
console.log(personas[1].nombre); // Marcos
console.log(personas.length); // 3



/*=========================================================
    Iteracion en arrays y arrays de objetos
===========================================================

- for:      Propociona maximo control, podemos usar las palabras clave del control de flujo avanzado (break y continue). Como desventajas es mas verboso

- forEach:  Sintaxis limpia, no necesita contador. Como desventajas, no podemos romper el bucle con break

- map:      Transforma cada elemento y retorna un nuevo array con los resultados

- filter:   Selecciona los elementos que cumplan una condicion y retorna un nuevo array con elementos filtrados

- reduce:   Reduce el array a un unico valor y retorna un valor acumulado

- find:     Buscan el primer elemento que cumpla una condicion y retorna el elemento o indice

- for...of: Tiene una sintaxis limpia, permite break/continue pero no provee indice automatico

- some y every: Verificar si alguno o todos cumplen una condicion
*/

//////////
// for //

// Sumando elementos
const numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(`La suma es ${suma}`);


// Buscando elementos
const frutas = ["banana", "pera", "pomelo"];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("pom")) {
        console.log(frutas[i]);
        break;
    }    
}    


// Iteramos el array de objetos con un bucle for "clasico"
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre);
}


// Filtrando objetos
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Mouse", precio: 20 },
    { id: 3, nombre: "Teclado", precio: 50 },
    { id: 4, nombre: "Tarjeta sonido", precio: 150 },
    { id: 5, nombre: "Impresora 3D", precio: 8000 },
    { id: 6, nombre: "Pendrive", precio: 10 }
];    

let productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio >= 150) {
        productosCaros.push(productos[i]);
    }    
}    

console.log(productosCaros);



//////////////
// forEach //

// Imprimir elementos
const colores = ["blanco", "azul", "amarillo"];

colores.forEach(color => console.log(color));


// Modificar array externo
const numeros2 = [1, 2, 3];
const dobles = [];

numeros2.forEach(num => dobles.push(num * 2));
console.log(dobles);


// Actualizar propiedades
const estudiantes = [
    { nombre: "Alejo", nota: 9 },
    { nombre: "Juan Manuel", nota: 8 },
    { nombre: "Johnny", nota: 3 },
    { nombre: "Ernesto", nota: 2 },
    { nombre: "Leon", nota: 5 }
];

estudiantes.forEach(estudiante => {
    estudiante.aprobado = estudiante.nota >= 4;
});

console.log(estudiantes);
console.table(estudiantes);



//////////
// map //
// Transforma cada elemento y retorna un nuevo array con los resultados

// Crear un array de cuadrados
const nums = [1, 2, 3, 4, 5];

const cuadrados = nums.map(num => num * num);
console.log(cuadrados);

// Convertir a strings
const edades = [25, 30, 35];
const mensajeEdades = edades.map(edad => `Tengo ${edad} años`);
console.log(mensajeEdades);

/*const estudiantes = [
    { nombre: "Alejo", nota: 9 },
    { nombre: "Juan Manuel", nota: 8 },
    { nombre: "Johnny", nota: 3 },
    { nombre: "Ernesto", nota: 2 },
    { nombre: "Leon", nota: 5 }
];*/

// Extraer propiedades de un array de objetos
const nombresEstudiantes = estudiantes.map(e => e.nombre);
console.log(nombresEstudiantes);



/////////////
// filter //
// Selecciona los elementos que cumplan una condicion y retorna un nuevo array con elementos filtrados


// Filtrar numeros pares de const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);


// Filtrar strings largos
const palabras = ["hola", "holiiiita", "veciniiito", "chau"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);


// Filtrar por propiedad
const empleados = [
    { nombre: "Mirtha", edad: 98 },
    { nombre: "Susana", edad: 36 },
    { nombre: "Moria", edad: 17 }
];

const mayores = empleados.filter(empleado => empleado.edad >= 18);
console.log(mayores);


// Filtrar multiples condiciones
const pedidos = [
    { id: 1, producto: "Laptop", cantidad: 1, completada: false },
    { id: 2, producto: "Mouse", cantidad: 3, completada: false },
    { id: 3, producto: "Teclado", cantidad: 2, completada: true },
    { id: 4, producto: "Tarjeta grafica", cantidad: 1, completada: true },
    { id: 5, producto: "Monitor", cantidad: 2, completada: false },
    { id: 6, producto: "pendrive", cantidad: 3, completada: true }
];

// Queremos filtrar pedidos que esten completos y que tengan mas de 1 cantidad en stock
const pedidosCompletosMultiples = pedidos.filter(p => p.cantidad > 1 && p.completada);
console.table(pedidosCompletosMultiples);



/////////////
// reduce //
// Reduce el array a un unico valor y retorna un valor acumulado

// Sumar propiedades 
const decenas = [10, 20, 30, 40, 50];
const sumaDecenas = decenas.reduce((suma, numero) => suma + numero, 0);
console.log(sumaDecenas);


// Sumar ventas
const ventas = [
    { producto: "Ojotas", cantidad: 3, precio: 25 },
    { producto: "Pantalones", cantidad: 2, precio: 40 },
    { producto: "Campera", cantidad: 1, precio: 80 }
];

const totalVentas = ventas.reduce((suma, prod) => suma + (prod.precio * prod.cantidad), 0);
console.log(totalVentas);

// [object Object] es la representacion por defecto en formato string de un objeto



///////////////////////
// find y findIndex //
// Buscan el primer elemento que cumpla una condicion y retorna el elemento o indice

// Buscar un numero
const listaNumeros = [5, 12, 8, 130, 44];
const numeroEcontrado = listaNumeros.find(num => num > 10);
console.log(numeroEcontrado);

// Buscar un objeto por propiedad
const nuevosAlumnos = [
    {nombre: 'Alejo', nota: 9, aprobado: true},
    {nombre: 'Juan Manuel', nota: 8, aprobado: true},
    {nombre: 'Johnny', nota: 3, aprobado: false},
    {nombre: 'Ernesto', nota: 2, aprobado: false},
    {nombre: 'Leon', nota: 5, aprobado: true}
];

// const alumnoAprobado = nuevosAlumnos.find(a => a["aprobado"]); // Notacion corchete
const alumnoAprobado = nuevosAlumnos.find(a => a.aprobado); // Notacion de punto
console.log(alumnoAprobado);


// const listaNumeros = [5, 12, 8, 130, 44];
const indice = listaNumeros.findIndex(num => num > 100);
console.log(indice);


// Encontrar indice de un objeto
const tareas = [
    { id: 1, descripcion: 'Comprar leche', completada: false },
    { id: 2, descripcion: 'Estudiar JavaScript', completada: true },
    { id: 3, descripcion: 'Hacer ejercicio', completada: false }
];

const indiceTarea = tareas.findIndex(tarea => tarea.completada);
console.log(indiceTarea);



///////////////
// for...of //
// Tiene una sintaxis limpia, permite break/continue pero no provee indice automatico
const nuevosEmpleados = [
    { nombre: 'Ana', salario: 3000, rol: "user" },
    { nombre: 'Juan', salario: 3500, rol: "admin"},
    { nombre: 'María', salario: 4000, rol: "user"}
];

for (let empleado of nuevosEmpleados) {
    if (empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana mas de 3500`);
        break;
    }
}



///////////////////
// some y every //
// Verificar si alguno o todos cumplen una condicion
const numerosRandom = [1, 3, 5, 7, 8];
const hayPares = numerosRandom.some(num => num % 2 === 0);
console.log(hayPares); // true

const todosPositivos = numerosRandom.every(num => num > 0);
console.log(todosPositivos); // true


// Verificamos si hay usuarios admin en nuevosEmpleados
const hayAdmins = nuevosEmpleados.some(emp => emp.rol === "admin");
console.log(hayAdmins);


// Verificamos si todos los nuevosEmpleados cobran 3500 o superior
const todosSonSrCobranza = nuevosEmpleados.every(emp => emp.salario >= 3500);
console.log(todosSonSrCobranza);



/* =========================
    Iteracion de objetos
============================

- Podemos acceder a propiedades y modificar valores
- for...in
- Object.keys(), Object.values(), Object.entries()
*/

const estudiante = { nombre: "Catriel", edad: 45, curso: "Progra III" };

// Iteramos con for...in
for (const propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`); // nombre: Catriel   edad: 45   curso: Progra III
}


// Object.keys() para obtener claves
const claves = Object.keys(estudiante);
claves.forEach(clave => console.log(clave));


// Object.values() para obtener valores
const valores = Object.values(estudiante);
console.log(valores);


// Object.entries() para obtener pares clave-valor
for (const [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave} : ${valor}`);
}


/*========================
    Resumen comparativo
==========================

1. Bucles clásicos ( for , while ) son los más rápidos para iteraciones simples
2. Métodos funcionales ( map , filter ) son más lentos pero más expresivos
3. for...of ofrece buen equilibrio entre rendimiento y legibilidad


Recomendaciones de uso

- Transformar array:            map()
- Filtrar elementos:            filter()
- Reducir a un valor:           reduce()
- Buscar elemento:              find() y findIndex()
- Verificar condiciones:        some() y every()
- Necesitamos break/continue:   for...of, for()
*/

// TO DO, probar el refresh de la cache con localStorage y sessionStorage
// TO DO, Chusmear Prototype
```

---

## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays
```js
/*===================================
    Arrays  y Objetos en JavaScript
=====================================
En JavaScript, los arrays y objetos son estructuras de datos fundamentales.

- Los arrays se utilizan para almacenar una lista ORDENADA de elementos
    - Cada elemento de neustro array tiene una posicion o indice
    - Pueden contener cualquier tipo de dato (n/*=========================================================
    Objetos globales en JavaScript: Navegador y Node.js
===========================================================

- Los objetos globales en JavaScript son aquellos que estan disponibles en todo el entorno de ejecucion.

- Su proposito es facilitar el acceso a ciertas funciones y valores predeterminados


En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript, como (Array, String, Object, etc), asi como un conjunto de objetos especifico para la interaccion con la pagina web y su entorno

===============
    window
===============
- el objeto global principal en el entorno de navegador.
- representa la ventana dle navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web
- todos los objetos, variables y funciones definidos en el ambito global, estan automaticamente disponibles como propiedades del objeto window
- Entre los objetos y metodos que provee window tenemos:*/

// document: Representa el DOM de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML. Es un subobjeto de window y representa el DOM de la pagina web, es la representacion estructural de la pagina HTML que permite acceder, modificar y manipular los elementos del documento

// alert, prompt y confirm : Permiten mostrar dialogos al usuario o cuadros para recibir input de este

// setTimeout y setInterval: Metodos para programar la ejecucion del codigo despues de un tiempo, con setTimeout o despues de un invervalo con setInterval
setTimeout(() => console.log("Hola despues de 1 segundo"), 1000);

// location: Proporicona info sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);

// navigator: Contiene informacion sobre el navegador, como la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);

// console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

// localStorage y sessionStorage: permiten almacenar datos en el navegador de forma persistente o temporal

// history: proporciona acceso al historia de navegacion del navegador


/*====================================
    Almacenamiento de datos en JS
======================================

En JavaScript, almacenar datos implica elegir la estructura adecuada de acuerdo con el tipo de informacion que se quiere guardar y como se desea manipular.

- Variables simples:    Para valores unicos como strings o numeros
- Objetos:              Para representar datos complejos con propiedades
- Arrays:               Para almacenar una lista de elementos, idealmente del mismo tipo
- Arrays de objetos:    Para manejar listas de elementos complejos que contienen multiples propiedades


Usaremos objetos cuando:
    - Queremos represnetar una entidad unica con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombre


Usaremos arrays simples cuando:
    - Querramos una lista ordenada de elementos individuales
    - Donde cada elemento no requiere atributos adicionales
    - Generalmente para almacenar datos del mismo tipo


Usaremos arrays de objetos
    - Queremos almacenar instancias del mismo tipo de entidad
    - Cuando tenemos una lista de entidades complejas, cada una con multiples propiedades
    - Podremos realizar operaciones en lote y mantener una coleccion de elementos relacionados de forma organizada

*/
// Almacenamos multiples objetos donde cada objeto tiene la misma estructura o contiene atributos similares
let personas = [
    { nombre: "Marta", edad: 20, ocupacion: "Ingeniera"},
    { nombre: "Marcos", edad: 25, ocupacion: "Diseñador"},
    { nombre: "Daniel", edad: 30, ocupacion: "Musico"}
];

console.log(personas[1]); // {nombre: 'Marcos', edad: 25, ocupacion: 'Diseñador'}
console.log(personas[1].nombre); // Marcos
console.log(personas.length); // 3



/*=========================================================
    Iteracion en arrays y arrays de objetos
===========================================================

- for: Propociona maximo control, podemos usar las palabras clave del control de flujo avanzado (break y continue). Como desventajas es mas verboso

- forEach: Sintaxis limpia, no necesita contador. Como desventajas, no podemos romper el bucle con break
*/

//////////
// for //

// Sumando elementos
const numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(`La suma es ${suma}`);


// Buscando elementos
const frutas = ["banana", "pera", "pomelo"];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("pom")) {
        console.log(frutas[i]);
        break;
    }    
}    


// Iteramos el array de objetos con un bucle for "clasico"
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre);
}


// Filtrando objetos
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Mouse", precio: 20 },
    { id: 3, nombre: "Teclado", precio: 50 },
    { id: 4, nombre: "Tarjeta sonido", precio: 150 },
    { id: 5, nombre: "Impresora 3D", precio: 8000 },
    { id: 6, nombre: "Pendrive", precio: 10 }
];    

let productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio >= 150) {
        productosCaros.push(productos[i]);
    }    
}    

console.log(productosCaros);



//////////////
// forEach //

// Imprimir elementos
const colores = ["blanco", "azul", "amarillo"];

colores.forEach(color => console.log(color));


const numeros2 = [1, 2, 3];
const dobles = [];

numeros2.forEach(num => dobles.push(num * 2));
console.log(dobles);


// TO DO, probar el refresh de la cache con localStorage y sessionStorage
umeros, strings, booleanos, otros arrays, objetos, funciones, etc)
    - Los elementos no tienen que ser del mismo tipo


- Los objetos son ideales para almacenar o agrupar datos con propiedades clave-valor
    - Los objetos son colecciones con pares clave-valor
    - Las claves son cadenas que identifican cada valor, esto permite un acceso rapido y estructurado a los datos
    - los objetos son utiles cuando queremos representar una entidad con multiples propiedades
    - Accedemos a las propiedades de un objeto a traves de la notacion de punto (objeto.propiedad) o la notacion de corchete (objeto["propiedad"])


Uso principal:  
    - Array como lista ordenada de elementos
    - Objeto como coleccion de pares clave valor

Acceso a datos:
    - Accedemos al array por su indice (array[0])
    - Accedemos al objeto por su clave (objeto.clave / objeto["clave"])

Metodos:
    - En arrays contamos con push(), pop(), map()
    - Metodos personalizados y funciones

Iteracion:
    - forEach(), map(), etc
    - for...in, Object.keys(), Object.values()
*/

// Array
let frutas = ["manzana", "banana", "pera"];

console.log(frutas[0]); // manzana


// Objeto
let estudiante = {
    nombre: "Rodrigo",
    edad: 32,
    ciudad: "Cordoba",
    saludar: function() {
        return `Hola, me llamo ${this.nombre}, soy cantante de cuarteto de ${this.ciudad}`
    }
}

console.log(estudiante);

// Notacion de punto
console.log(estudiante.nombre);

// Notacion de corchetes
console.log(estudiante["ciudad"]);

// Accedemos a sus metodos, funciones internas del objeto
console.log(estudiante.saludar());

// Agregamos una propiedad
estudiante.estilo = "Cuarteto";

// Eliminamos una propiedad
delete estudiante.edad;



/* ===============================
    Metodos de strings
==================================*/

let saludo = "Hola desde la 334";
for (let i = 0; i < saludo.length; i++) {
    console.log(saludo[i]);
}

// length: devuelve la longitud del string
console.log("Hola mundo".length);


// charAt(index): Devulve el caracter en la posicion especificada
console.log("Hola".charAt(3));


// concat: Concatenar (unir) strings
console.log("Hola".concat(" ", "mundo"));
let saludo2 = "Aguante el cuarteto";
console.log(saludo.concat(" ", saludo2));


// includes: Devuelve true si la subcadena se encuentra en el string
console.log("JavaScript".includes("script")); // false
console.log("JavaScript".includes("Script")); // true


// startsWith: Comprueba si el string comienza con la subcadena
console.log("Hola mundo".startsWith("Hola")); // true


// endsWith: Comprueba si el string termina con el substring
console.log("Hola mundo".endsWith("mundo")); // true


// indexOf: Devuelve el indice de la PRIMERA aparicion de un substrinig
console.log("banana".indexOf("a"));


// lastIndexOf: Devuelve el indice de la ULTIMA aparicion del substring
console.log("banana".lastIndexOf("a"));


// replace: Reemplazar una parte del string
console.log("Hola mundo".replace("mundo", "division 334"));


// replaceAll: Reemplaza todas las apariciones
console.log("1,2,3".replaceAll(",", ";"));


// toLowerCase: Convierte a minusculas
console.log("AGUANTE JAVASCRIPT VIEJO! NO ME IMPORTA NADA!!".toLowerCase());


// toUpperCase: Convierte a mayusculas
console.log("holis, uwu, T.T".toUpperCase());


// trim: Elimina espacios en blanco al inicio y al final
console.log("           holis          ".trim());


// trimStart: Elimina espacios al inicio
console.log("           holis    ".trimStart());

// trimEnd: Elimina espacios al final
console.log("      holis       ".trimEnd());


// slice: Extrae parte del string
console.log("JavaScript".slice(0, 4));
console.log("JavaScript".slice(-4)); // ript


// substring: Extrae parte del string, muy parecido a slice, pero no acepta negativos
console.log("JavaScript".substring(4, 10));


// split: Divide el string en un array
console.log("rojo,verde,azul".split(","));
console.log("rojo, verde, azul".split(", "));
console.log("Holus".split(""));


// repeat: Repite el string
console.log("ji".repeat(3));


// match(regex): Devuelve coincidencias con una expresion regular
console.log("abc123".match(/\d+/g));



/* ===============================
    Metodos de arrays
==================================*/

// let frutas = ["manzana", "banana", "pera"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// length: Devuelve la longitud del array
console.log([1, 2, 3,4, 5, 6, 7, 8, 9].length);
console.log(frutas.length);


// push: Agrega un elemento al FINAL del array
frutas.push("pomelo");
console.log(frutas);
frutas.push("anana", "frambuesa", "sandia");


// pop: Elimina el ULTIMO elemento y lo devuelve
console.log(frutas.pop());


// unshift: Agrega un elemento al INICIO del array
frutas.unshift("cereza");


// shift: Elimina el primer elemento y lo devuelve
console.log(frutas.shift());


// concat: Concatena arrays;
let ingredientes = ["avena, semillas, maca"];
console.log(frutas.concat(ingredientes));
console.log([1, 2].concat(3, 4));


// join: une los elementos en un string
console.log([1, 2, 3].join("-"));


// slice: Extrae una copia parcial del array
console.log([1, 2, 3, 4].slice(1, 3));


// splice: Modifica el array in situ, puede borrar y agregar
// https://www.w3schools.com/jsref/jsref_splice.asp
const arr = [1, 2, 3];
arr.splice(1, 0, "dos");
console.log(arr); // [1, 'dos', 2, 3]

const verduras = ["tomate", "lechuga", "albahaca"];
verduras.splice(1, 0, "rucula"); // primer argumento determina la posicion
console.log(verduras);


// indexOf: Devuelve la PRIMERA POSICION del elemento
console.log([1, 2, 3].indexOf(2)); // 1, porque el elemento 2 esta en la posicion 1
console.log([1, 2, 3].indexOf(4)); // Si no se encuentra, devuelve -1


// lastIndexOf: Ultima posicion del elemento
console.log([1, 2, 3, 4, 5, 2, 3, 4, 5, 1, 2].lastIndexOf(4));


// includes: Devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
```


---

#### [GDB Portfolio](https://onlinegdb.com/492D6SjRM)
## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

```js
/*===================================
    Scope (Ambito)
=====================================
El Scope o Ambito se refiere al contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas

1. Global Scope o Ambito Global:
    - Las variables declaradas fuera de cualquier funcion o bloque, tienen alcance de global y son accesibles desde cualquier parte del codigo

2. Local Scope / Function Scope (Ambito local o de funcion)
    - Las variables declaradas dentro de una funcion solo son accesibles dentro de esa funcion.  (function scope)
    
3. Block Scope o Ambito de bloque
   - A partir de ES6, las variables declaradas con let y const tienen alcance de bloque, lo que significa que SOLO son accesibles dentro del bloque en que se declararon: { }, if, for, etc
*/

// Ejemplo global scope
var globalVar = "Soy global";


function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal();
console.log(globalVar);


// Ejemplo function scope
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); // main.js:34 Uncaught ReferenceError: localVar is not defined


// Ejemplo block scope
if(true) {
    let bloqueLet = "Soy una let de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined



// Scope Chain o Cadena de Ambito
// Cuando intentamos acceder a una variable, JavaScript busca en la cadena de ambito, comenzando desde el ambit o mas interno hasta el mas externo hasta encontrar la varaible o llegar al ambito global

var soyGlobal = "Soy una var global";

function externa() {
    var soyExterna = "Soy una var externa";

    function interna() {
        var soyInterna = "Soy una var interna";
        console.log(soyGlobal);
        console.log(soyExterna);
        console.log(soyInterna);
    }

    interna();
    // console.log(soyInterna); // main.js:63 Uncaught ReferenceError: soyInterna is not defined
    
}


externa();


/*===================================
    Function scope vs Block scope
=====================================

- Function Scope: Las variables declaradas con var, tienen ambito de funcion.
Esto significa que si se declaran dentro de una function, no son accesibles fuera de esa funcion, pero no estan limitadas por bloques

- Block Scope: Las variables declardas con let y const estan limitadas por el bloque en que se declaran
*/

// Ejemplo function scope
function scopeFunction() {
    if (true) {
        var functionVar = "Soy de funcion";
    }

    console.log(functionVar);
}

scopeFunction();


// Ejemplo con block scope
function scopeBlock() {
    if (true) {
        let bloqueLet = "Soy una let de bloque";
        const bloqueConst = "Soy una const de bloque";
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBlock();



/*===================================
    Hoisting o Elevacion
=====================================
- Las declaraciones de variables y funciones en JavaScript se "mueven hacia arriba" de su contexto de ejecucion (scope).

- Solo las declaraciones son elevadas, no las inicializaciones

- var:          las variables se elevan y se inicializan con undefined

- let y const:  las variables se elevan pero no se inicializn, por lo que veremos un error si se intenta acceder antes de su declaracion
*/

console.log(elevadaVar); // undefined
var elevadaVar = "Soy var elevada";
console.log(elevadaVar);


// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);



/*===================================
    Diferencias var, let y const
=====================================
- var: Tiene ambito de funcion (declarada dentro de una funcion), permite la redeclaracion y la reasignacion
    - De ambito global o ambito de funcion
    - Puede ser redeclarado y reasignado
    - Tiene elevacion a nivel de funcion, lo que significa que puede utilizarse antes de la declaracion


- let: Tiene ambito de bloque (declarada de {}, if, loop, function, etc), permite la redeclaracion pero no la reasignacion
    - De ambito de bloque (dentro de un bucle, una condicional o una funcion -> {})
    - No puede volverse a declarar, pero si reasignar
    - Tiene elevacion a nivel de bloque, lo que significa que no es accesible antes de la declaracion

- const: Tiene ambito de bloque, pero a diferencia de let, prohibe la reasignacion y la redeclaracion
    - - De ambito de bloque (dentro de un bucle, una condicional o una funcion -> {})
    - No se puede volver a declarar ni reasignar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion


let y const se introdujeron en ECMAScript 2015 (ES6), para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables.
Tanto let como const no permiten la elevacion, mientras que var si


- Usaremos const para variables de solo lectura, como constantes u objetos inmutables
- Usaremos let para variables que puedan cambiar con el tiempo pero que no deban volver a declararse
- Evitar usar var debido a su ambito global o de funcion, que puede dar lugar a conflictos o bugs
*/

const PI = 3.1416;

let contador = 0;
contador++;
console.log(contador);





/*===================================
    Funciones en JavaScript
=====================================
- Una funcion es un bloque de codigo reutilizable que podremos ejecutar cuando lo llamamos por su nombre.

- Usaremos funciones porque permiten organizar el codigo, permiten su reutilizacion y mejoran la legibilidad y el mantenimiento


1. Funcion declarada: La forma mas comun de declarar una funcion en JavaScript, usando la palabra clave function

function nombreFuncion() {
    // Codigo a ejecutar cuando se llame o invoque esta funcion
}


===============================
    Funciones flecha
===============================
Son una forma mas compacta de escribir funciones. Se introdujeron en ES6 y tienen una sintaxis mas concisa

const nombreFuncion = (parametros) => {  }
*/

// Funcion sin parametros
function sumaDosYCinco() {
    let resultado = 2 + 5;
    console.log(`El resultado es ${resultado}`);
}

sumaDosYCinco();

// Funcion con parametros: Podemos definir variables en las funciones que acepten valores cuando se les llama
function sumar(a , b) { // Los parametros son a, b
    let resultado = a + b;
    console.log(`El resultado es ${resultado}`);
}

sumar(5, 3); // Los argumentos son los valores que le pasamos a la funcion cuando los llamamos


// Funciones que devuelven un valor: usando la palabra clave return
function multiplicar(a, b) {
    return a * b; // Todo lo de abajo no se va a ejecutar
    console.log("Probando"); // A partir de la palabra clave return, no se continua la ejecucion del codigo
}

console.log(multiplicar(4,5));


// Valores predeterminados en los parametros
function saludar(nombre = "maestro") {
    console.log(`Hola ${nombre}`);
}

saludar();

function sumaTresNumeros(a, b, c) {
    return a + b + c;
}

console.log(sumaTresNumeros(1, 2, 3));


// Funciones flecha
const saludarFlecha = () => {
    console.log("Hola mundo");
}

saludarFlecha();

// Funcion flecha con un solo parametro, los parentesis son opcionales
const saludarFlechaNombre = nombre => {
    console.log(`Que onda ${nombre}`);
}

saludarFlechaNombre("Emmanuel");


// Funcion flecha en una sola linea
// Si la funcion solo devuelve un valor, no es necesario usar la palabra return ni las { }
const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(6, 9));


/*=====================================
    Tipos de funciones en JavaScript
=======================================

1. Funcion declarada / Named function o Basic function

- Es la declaracion basica de JavaScript, usa la keyword function
- Se recomienda para funciones con nombre o cuando se necesite hoisting.
- Las funciones declaradas con la keyword function se pueden elevar a la parte superior de su ambito. Por lo que podemos llamar a la funcion antes de ser declarada

    ciclon();

    function ciclon() {
        console.log(`Aguante San Lorenzo`);
    }


2. Funcion expresada / Function expression
- Es la funcion que esta dentro de una varaible
- Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion

    const casla = function() {
        console.log(`Aguante el ciclon`);
    }

    casla();


3. Funcion anonima / Anonymous function
- No tiene nombre y se usan como callbacks generalmente
    
    setTimeout(function() {
        console.log(`Soy una funcion anonima dentro de una operacion asincronica`)
    }, 1000);


4. Funcion flecha / Arrow function
- Muy utiles para escribir funciones de una sola linea

const sumarFlecha = (a, b) => a + b;


5. Funcion de metodos / Method function
- Funciones definidas dentro de un objeto o clase

    const persona = {
    nombre: "Alejo",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

persona.saludar();


// 6. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
- Funciones que se ejecutan inmediatamente despues de haberse definido

(function() {
    console.log(`Esta es una IIFE`);
}());




==========================================
    Tipos de funciones flecha
==========================================
// Funcion flecha sin parametros
const despedirse = () => console.log("Chau nos vemos");
despedirse();

// Funcion de flecha con un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(5));

// Funcion de flecha con mas de un parametro
const restar = (a, b) => a - b;
console.log(restar(5, 3));


// Funcion de flecha con mas de una instruccion en la funcion
const saludarProfe = nombre => {
    const saludo = `Hola, ${nombre}`
    return saludo;
}

console.log(saludarProfe("Gabi"))
*/

// 1. Funcion declarada
ciclon();

function ciclon() {
    console.log(`Aguante San Lorenzo`);
}


// 2. Funcion expresada
const casla = function() {
    console.log(`Aguante el ciclon`);
}

casla();


// 3. Funcion anonima
setTimeout(function() {
    console.log(`Soy una funcion anonima dentro de una operacion asincronica`)
}, 1000);


// 4. Funcion flecha
const sumarMuestra = (a, b) => a + b;


// 5. Funcion de metodos / Method function
const persona = {
    nombre: "Alejo",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

persona.saludar();


// 6. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
(function() {
    console.log(`Esta es una IIFE`);
}());




// Funcion flecha sin parametros
const despedirse = () => console.log("Chau nos vemos");
despedirse();

// Funcion de flecha con un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(5));

// Funcion de flecha con mas de un parametro
const restar = (a, b) => a - b;
console.log(restar(5, 3));


// Funcion de flecha con mas de una instruccion en la funcion
const saludarProfe = nombre => {
    const saludo = `Hola, ${nombre}`
    return saludo;
}

console.log(saludarProfe("Gabi"));
```

---

## JavaScript II / Control de flujo, estructuras de control, condicionales y bucles I

```js
/*===================================
    Control de flujo
=====================================
El control de flujo en JavaScript determina como se ejecutan las instrucciones de un programa.
Al diseñar un programa, es importante establecer que partes del codigo se ejecutan y bajo que condiciones. En JS esto se logra mediante estructuras de control que permiten ejecutar secuencias de codigo basadas en decisiones, repeticiones o condiciones especificas.

1. Condicionales:               if, else if, else   &&, ||, !   operadores ternarios
2. Bucles:                      for, while, do...while
3. Control de flujo avanzado    break, continue, switch
*/

/*=====================================
    Condicionales if, else, else if
=======================================

if (condicion1) {
    // Codigo que se ejecuta si la condicion1 es verdadera

} else if (condicion2) {
    // Codigo que se ejecuta si la condicion2 es verdera

} else {
    // Codigo que se ejecuta si ninguna condicion es verdadera
}
*/

let edad = 20;

if (edad >= 18) {
    console.log("Sos mayor de edad");

} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida");
}


let edad2 = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Podes manejar");
}

if(edad < 18 || !tieneLicencia) {
    console.log("No podes manejar");
}


/*========================================
    Operador de negacion logica basica !
==========================================

- El operador ! Invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa.

El operador NOT !, nos permite verificar si una variable es falsy
En JavaScript, los valores "falsy" son aquellos que, cuando se evaluan en un CONTEXTO BOOLEANO, resultan en false.

Algunos ejemplos de falsy son: false, 0, "", null, undefined y NaN

Algunos ejemplos de truthy son: 
    - Los números distintos de cero (como -42, 3,14, infinito)
    - las cadenas no vacías (como «0», «false», «hello»)
    - los objetos (incluidos los objetos vacíos {}), los arrays (incluidas los arrays vacíos []
    - las funciones y las fechas
*/

let estado = true;

function alternarEstado() {
    estado = !estado; // Invierte el valor de "estado"
    // console.log(`Nuevo estado: ${estado}`);
    console.log("Nuevo estado", estado);
}

alternarEstado(); // false
alternarEstado(); // true
alternarEstado(); // false


// Verificando si una variable es falsy
let valor1 = 0;         // 0 es un valor falsy
let valor2 = "Hola";    // Una cadena no vacia es un valor truthy

console.log(!valor1);   // true (0 es falsy, asi que se convierte en true)
console.log(!valor2);   // false (Una cadena no vacia es truthy, asi que se convierte en false)


// Operador ternario: Una forma mas compacta de escribir una condicion if...else
let edad3 = 20;
let mensaje = (edad3 >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);




/*========================================
    Bucles: for, while, do...while
==========================================

- Bucle for: Se usa cuando conocemos de antemano el numero de iteraciones

for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion (cada vuelta de bucle)
}


- Bucle while: Ejecuta el bloque de codigo mientras la condicion sea verdadera

while (condicion) {
    // Codigo a ejecutar mientras la condicion sea verdadera
}



- Bucle do...while: Similar al while, pero la condicion se evalua despues de ejecutar el bloqeu de codigo, lo que garantiza que el codigo se ejecutara al menos una vez

do {
    // Codigo a ejecutar
} while (condicion);
*/

// Ejemplo bucle for
for (let i = 0; i < 5; i++) {
    console.log(`Iteracion: ${i}`);
}


// Ejemplo bucle for anidado con tabla de multiplicar
for (let i = 1; i < 4; i++) {

    for(let j = 1; j < 4; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

}

// TODO: Ejercicio sugerido, crear la tabla de multiplicar del 1 al 10


// Ejemplo bucle while
let contador = 0;
while (contador < 5) {
    console.log(`Iteracion while: ${contador}`);
    contador++;
}


// Ejemplo do...while
let numero = 0;
do {
    console.log(`Iteracion do...while ${numero}`);
    numero++;
} while(numero < 5);


/* ==============================================
    Control de flujo avanzado: break y continue
=================================================

- break:    Se usa para salir inmediatamente de un bucle o una estructura de control

- continue: La instruccion continue salta a la siguiente iteracion del bucle, omitiendo el codigo restante dentro del bucle para esa iteracion
*/

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }

    console.log(`Iteracion con break: ${i}`);
}

for (let i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        continue; // Salta la iteracion cuando i es par
    }

    console.log(`Numero impar: ${i}`);
}

/* =================================
    Estructura de control switch 
====================================

Una estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

switch (expresion) {
    case valor1:
        // ...
        break;

    case valor2:
        // ...
        break;

    default:
        // Codigo a ejecutar si ninguno de los casos coincide
}
*/

/*
let respuestaUser = confirm("Te gusta JavaScript?");
console.log(respuestaUser);
*/

let diaSemana = parseInt(prompt("Escribi un dia de la semana"));
console.log(diaSemana);
console.log(typeof diaSemana);


switch (diaSemana) {
    case 1:
    case "1":
        console.log("Es lunes");
        break;

    case 2:
        console.log("Es martes");
        break;

    case 3:
        console.log("Es miercoles");
        break;

    case 4:
        console.log("Es jueves");
        break;

    case 5:
        console.log("Es viernes");
        break;

    default:
        console.log("Fin de semana")
}


// Tarea ejercicio sugerido calculadora con prompt
```


---

## JavaScript I / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores
JavaScript es un lenguaje de programación que utilizamos para crear páginas web interactivas. JavaScript puede hacer que las páginas respondan a las acciones del usuario y a cambios que ocurren en el documento, realizar cálculos, alterar elementos de forma dinámica, realizar operaciones personalizadas, etc

Es un lenguaje de programacion que se usa para procesar informacion y manipular documentos. JS provee instrucciones que se ejecutan de forma secuencial y para indicarle al sistema lo que queremos que haga. Cuando el navegador encuentra este tipo de codigo en nuestro documento, ejecuta las instrucciones al momento y cualquier cambio realizado en el documento se muestra en pantalla

```js
/* La consola de JavaScript es una herramienta de depuracion en el navegador web 
Permite ejecutar comandos en JS, ver mensajes de registro y errores, y hacer pruebas interactivas de codigo
*/
console.log("Hola mundo"); // Mensaje por consola


/* Introduccion a las variables
Las variables almacenan datos que pueden ser reutilizados y modificados

- var: Usado historicamente para declarar variables, pero con limitaciones como el hositing, el scope, etc

- let: Introducido en ES6. Permite declarar variables que pueden cambiar y tienen alcance de bloques, lo que mejora el control sobre donde y cuando se puede acceder a la variable

- const: Introducido en ES6. Se utiliza para declarar variables que no se deben reasignar. El valor en const puede ser modificado si es un objeto o array, pero la referencia no puede cambiar
*/

var nombre = "Anibal"; // Variable var, con alcance global o funcion, no tiene bloque

let edad = 35; // Declaracion moderna, con alcance de bloque

const pi = 3.1416; // Declaramos una constante, cuyo valor no puede cambiar una vez asignado y no permite reasignacion

console.log(nombre);
console.log(edad);
console.log(pi);


/* ===============================
    Tipos de datos primitivos
==================================

- Numeros:      Valores numericos
- Cadenas:      Texto encerrado en comillas simples o dobles
- Booleanos:    true o false
- null:         Representa un valor intencionalmente vacio
- undefined:    Una variable que fue declarada pero no tiene valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);



/* ===============================
    Operadores
==================================
https://www.w3schools.com/js/js_operators.asp

- Aritmeticos:      Usados para realizar operaciones matematicas sobre valores numericos
- De asignacion:    Asignan valores a las variables
- De comparacion:   Se usan para comparar valores y devuelven un resultado booleano (true o false)
- Logicos:          Se usan para combinar expresiones booleanas
- De tipo:          Permiten verificar el tipo de un valor o su relacion con clases/constructores
*/

// Operadores aritmeticos
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Operadores de asignacion
let x = 10;
console.log(x);

x += 5;
console.log(x);

x -= 2;
console.log(x);


// Operadores de comparacion
let c = 5;
let d = "5";

console.log(c == d);    // true, porque compara solo el valor
console.log(c === d);   // false, porque compara valor y tipo


// Operadores logicos
let e = true;
let f = false;

console.log(e && f); // false
console.log(e || f); // true
console.log(!e);    // false


// Operadores de tipo
console.log(typeof 42); // typeof devuelve el tipo de dato de una variable
console.log(typeof "Holis");
console.log([] instanceof Array); // instanceof verifica si un objeto es instancia de una clase


// Operadores de incremento / decremento
let g = 10;
console.log(g);

g++;
console.log(g);

g--;
console.log(g);
```