# UTN25Cuatri2_334 :frog:

# JavaScript :scroll:


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

---

## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

---

## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays
