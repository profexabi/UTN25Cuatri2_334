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
*/





