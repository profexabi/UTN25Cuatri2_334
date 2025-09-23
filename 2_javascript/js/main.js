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

