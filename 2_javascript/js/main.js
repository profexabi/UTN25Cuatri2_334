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

console.log(saludarProfe("Gabi"))