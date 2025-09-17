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