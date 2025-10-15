# UTN25Cuatri2_334 :frog:

# Node.js :scroll:

### Tareas
1. [Video Protocolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)
2. [Playlist de web de Todocode](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV)
    - Arquitectura cliente servidor
    - Protoclo HTTP
    - Opcional, librerias y frameworks
    - Que es JSON
    - Que son las APIs


---

### Notas
- Vimos solo modulo "os" -> continuar desde ahi


---

# Guia Node.js

## Introducción al backend
El desarrollo backend se refiere a la parte invisible de una aplicacion o sitio web, es decir, el motor que se encarga de las funcionalidades del lado del servidor.

El frontend se encarga de lo que el usuario ve e interactua, como botones, formularios, textos. Es decir, es la parte que se encarga del desarrollo de las interfaces de usuario

El backend se encarga de procesar solicitudes, manejar bases de datos. Todo lo que hay detrás y que le proporciona información a la parte visible

#### Para qué sirve?

- **Procesar datos**: Cuando un usuario envia un formulario o realiza una accion en el frontend, el backend recibe esa informacion y la procesa

- **Acceder a bases de datos**: Almacena y recupera datos de una BBDD como cuentas de usuario, productos, etc

- **Seguridad**: Protege la informacion sensible como contraseñas o datos personales

- **Autenticacion y autorizacion**: Gestionar quien puede acceder a ciertas funcionalidades o areas de la aplicacion


## Introduccion a Node.js
Node.js es un entorno de ejecuion que permite usar JavaScript fuera del navegador. Gracias a esto, podemos usar JavaScript para desarrollar aplicaciones del lado del servidor.

#### NPM
Es una amplia biblioteca de paquetes y herramientas para usar con Node.js

Clave, contar con una herramienta como NPM (Node Package Manager) o Gestor de Paquetes de Node, que va a ser como nuestro Play Store, es decir, una tienda o un almacen donde vamos a poder descargar paquetes, utilidades, herramientas, bibliotecas, es decir, cualquier funcionalidad extra para nuestra aplicacion backend.

Su proposito es facilitar la instalacion y gestion de bibliotecas y herramientas desarrolladas por la comunidad o por otros desarrolladores.
NPM nos ahorra tiempo, ya que no necesitamos construir todo desde cero, podemos aprovechar codigo de terceros, probado y optimizado. (Ej descargar un paquete que ya haga validaciones de datos)

#### Iniciando un proyecto npm
La estructura basica al trabajarcon npm consiste en inicializar un archivo `package.json`, el librito de instrucciones de nuestra aplicacion.

Para empezar a usar npm, lo primero que tenemos que hacer en cualquier proyecto es ejecutar el comando `npm init`.
Despues de esto, podemos instalar paquetes y listarlos como dependencias de nuestro proyecto.

#### Modulos en Node.js
Los modulos son como bloques de construccion que permiten organizar y reutilizar el codigo de forma eficiente. 
En lugar de tener todo el codigo en u archivo gigante, vamos a dividirlo en distintos archivos o modulos y luego importarlos en el lugar donde los necesitemos, para que nuestra aplicacion sea mas organizada, facil de entender, de mantener y de escalar.

**Node.js tiene varios moduos integrados que ya vienen listos para usar y nos permiten hacer cosas como trabajar con el sistema de archivos, manejar rutas o realizar tareas en red**.

Explicacion en `index.js`

```js
/*===========================
    OS (Operative System)
=============================
Este modulo nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js.

Vamos a poder obtener la cantidad de memoria libre disponible o el tipo de sistema operativo
*/

// Importamos este modulo integrado en Node.js
const os = require("os");

let memoriaLibre = os.freemem();
let tipoSistemaOperativo = os.type();

console.log("Memoria disponible: ", memoriaLibre);
console.log("Tipo de sistema operativo: ", tipoSistemaOperativo);
console.log(os.cpus());
```


---



### Guia Git
#### [Machetes de git](https://drive.google.com/drive/u/1/folders/1T1LEYs_H-NACabUJcdTXjodw8il6ZDsf)

1. [Instalar git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)

2. Clonar un repo que creamos en github
```sh
git clone https://gitlab.com/profexabi/UTN25Cuatri2_334.git
```

3. Trabajar sobre ese repo

4. (Primera vez que usamos) Indicamos nuestro nombre de usuario e email
```sh
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com" # Mismo email que tengamos en github

# Podemos ver donde tenemos almacenado el repo (podemos tener un mismo repo en distintos lugares, github, gitlab, bitbucket)
git remote -v

# Podemos cambiar el nombre de nuestro remoto
git remote rename origin github # cambiamos el nombre por defecto de origin a github

# Podemos tambien añadir otros remotos con el comando
# git remote add gitlab https://gitlab.com/profexabi/UTN25Cuatri2_334.git
```

5. Chequeamos los cambios en nuestro repo
```sh
git status
```

6. Guardo todos los cambios 
```sh
git add .
```

7. Registro los cambios
```sh
git commit -m "Descripcion brevisima de los cambios"
```

8. Envio los cambios a git
```sh
# git push nombreRepo nombreRama
git push origin main
```

#### Extra
- *Registrar versiones en git*
```sh
git tag -a v1.4 -m "mi version 1.4"
```
