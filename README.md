# UTN25Cuatri2_334 :frog:

# JavaScript :scroll:

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

---

## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha