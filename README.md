# UTN25Cuatri2_334 :frog:

# JavaScript :scroll:

---

### Online GDB maquetando el portfolio
- [HTML](https://onlinegdb.com/nxOnne9fJ)
- [CSS](https://onlinegdb.com/Y2RD1oosZW)

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

---


# Guia JavaScript

## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch

---

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis

---

## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos

