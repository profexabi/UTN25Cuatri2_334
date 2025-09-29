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




/* =================================
    Almacenamiento persistente 
====================================

El almacenamiento persistente hace que nuestras aplicaciones web pueden recordar informacion del usuario entre sesiones o durante la navegacion.

El navegador nos proporciona mecanismo para almacenar datos del lado del cliente.

- Cookies
- localStorage
- sessionStorage


================
    Cookies
================

Las cookies son pequeños fragmentos de informacion que se almacenan en el navegador del usuario y que se envían con cada peticion HTTP al servidor. Son más antiguas que localStorage y sessionStorage y fueron ampliamente usadas para mantener la sesion del usuario, guardar preferencias, etc

Caracteristicas de las cookies

    - Persistencia: Las cookies pueden tener una fecha de expiracion especifica. Si no se establece una expiracion, la cookie sera eliminada al cerrar la sesion del navegador

    - Envio al servidor: Las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util pero sobrecarga la red

    - Almacenamiento por origen (dominio y protocolo): Al igual que locaStorage y sessionStorage, las cookies estan asociadas a un dominio especifico

Uso principal

    - Autenticacion (tokens, sesion) 
    - Preferencias del usuario que deben ser enviadas al servidor
    - Seguimiento (tracking) de la actividad en la web

Caracteristicas tecnicas

    - Se envian automaticamente al servidor con cada solicitud HTP
    - Tamaño maximo de 4GB
    - Expiran segun una fecha determinada o duracion
    - Se pueden marcar como HttpOnly (accesibles solo desde el servidor) y Secure (solo sobre HTTP)


Explicacion W3Schools: https://www.w3schools.com/js/js_cookies.asp
*/

// A falta de una API web, podemos gestionar cookies usando el objeto document.cookie
document.cookie = "usuario=Pity; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

console.log(document.cookie);


// Ejemplo completo de una cookie de 7 dias de duracion
// Crear una cookie que expira en 7 días
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Obtener el valor de una cookie
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

// Establecer una cookie
setCookie("idioma", "es", 7);
// Leer una cookie
console.log(getCookie("idioma")); // Output: "es"



/* =========================
    localStorage
============================

localStorage es una API (funcionalidad extra) que permite almacenar datos de manera persistente en el navegador.

Los datos almacenados en localStorage no tienen una fecha de expiracion, por lo que estaran disponibles incluso despues de que el usuario cierre el navegador o apague la compu

Uso principal:

    - Guardar datos que deben perstir incluso al cerrar el navegador
    - Almacenar configuraciones de usuario, temas, carrito de compras, etc


Caracteristicas tecnicas:

    - Tamaño maximo: 5-10MB por dominio
    - Persistente, no tiene expiracion
    - Accesible solo desde JavaScript (no se envia al servidor)
    
Metodos de localStorage:

    - Guardar datos: localStorage.setItem(clave, valor)
    - Leer datos: localStorage.getItem(clave)
    - Eliminar un dato: localStorage.removeItem(clave)
    - Borrar todos los datos: localStorage.clear()



==========================
    Session storage
==========================

sessionStorage es una API similar a localStorage pero con una diferencia clave: los datos almacenados solo se mantienen durante la sesion del navegador. Cuando cerramos la pestaña o ventana del navegador, los datos se eliminan automáticamente.

Uso principal:

    - Guardar datos temporales mientras la pestaña del navegador este abierto
    - Información de formularios o pasos de navegacióon en una misma sesión

Características técnicas:

    - Tamaño similar a localStorage
    - Se borra al cerrar la pestaña
    - Solo es accesible desde JavaScript (no se envía al servidor)

Metodos de sessionStorage:

    - Guardar datos: sessionStorage.setItem(clave, valor)
    - Leer datos: sessionStorage.getItem(clave)
    - Eliminar un dato: sessionStorage.removeItem(clave)
    - Borrar todos los datos: sessionStorage.clear()



Consideraciones adicionales

    - Nunca guardemos información sensible, como contraseñas o tokens de autenticacion
    - En este caso, usemos cookies seguras con HttpOnly y Secure
*/

// Ejemplos tipicos de localStorage
localStorage.setItem("tema", "oscuro");
localStorage.setItem("idioma", "es");


// Creamos un objeto (o array de objeto si quisieramos)
let idoloTotal = {
    nombre: "Charly Garcia",
    ocupacion: "Idolo de rock",
    formacion: "Clasica",
    barrio: "Palermo"
}



// Creamos el item nombre en el local con el valor Charly
localStorage.setItem("nombre", "Charly");
console.log(localStorage.getItem("nombre"));


// Guardamos en una variable el valor de este item que almacenamos en el local
let nombre = localStorage.getItem("nombre");
console.log(nombre);


// Eliminamos un dato especifico
localStorage.removeItem("nombre");


// Limpiamos todo el localStorage
localStorage.clear();



console.log("1. Imprimimos nuestro objeto original:");
console.log(idoloTotal);

// Seteamos nuestro objeto o array de objetos como texto plano JSON (un formato standard de texto plano para el envio y recepcion de datos en la web)
console.log("2. Convertirmos nuestro objeto en texto plano para almacenarlo en el navegador");
let jsonIdoloTotal = JSON.stringify(idoloTotal); // De objeto a texto plano
console.log(jsonIdoloTotal);
localStorage.setItem("idolo", jsonIdoloTotal);

// Recuperamos de localStorage nuestro texto plano almacenado y lo convertimos en un objecto
console.log("3. Recuperamos nuestro objeto plano nuevamente en un objeto JS para poder manipularlo");
let idoloTotal_local = JSON.parse(jsonIdoloTotal); // De texto plano a objeto
console.log(idoloTotal_local);


// Cuando usar localStorage? Por ejemplo, para guardar un carrito de compras, donde le usuario selecciona productos y abandona la tienda, al volver, sus productos siguen ahi

// TO DO. Practica recomendada, guarden los productos de su carrito en el localStorage