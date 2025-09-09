# UTN25Cuatri2_334 :frog:

# JavaScript :scroll:

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

---

## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha