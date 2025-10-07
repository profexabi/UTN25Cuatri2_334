/*==============
    Callbacks
================

Funciones que se pasan como argumentos a otras funciones para ser ejecutadas despues
*/


// Ejemplo 1 -> Callback
function procesarDatos(datos, callback) {
    console.log("Procesando datos...");

    const resultado = datos.toUpperCase();

    callback(resultado); // Ejecuta la funcion callback
}

procesarDatos("hola mundo", (res) => {
    console.log(`Resultado: ${res}`);
});

/* Un callback es una funcion que se pasa como argumento a otra funcion y que se ejecuta despues de que algo haya ocurrido. Es como decirle a una funcion:

    "Cuando termines de hacer tu trabajo, llamás a esta otra función"


Para que se usan los callbacks?

    - Permiten ejecutar codigo despues de una tarea
    - Manejo de tareas asincronicas (como leer archivos o pedir datos a un servidor)
    - Hacer el codigo mas flexible y reutilizable
*/

// Ejemplo 2 -> Callback
function saludar (nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarUsuario(nombre, callback) {
    // Hacemos algo con el nombre

    callback(nombre); // Llamamos al callback
}

procesarUsuario("Pedro", saludar);

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


// HOF comunes en JavaScript

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
}
*/



// TODO Comparacion Callbacks y HOF