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
