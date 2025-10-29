# TP Integrador Div 334 Back :computer: :frog:

## Guia

## 1 / Configuracion inicial de proyecto

### 1.1 Instalacion y archivos basicos
- Instalamos Node.js y NPM e inicializamos el proyecto con
```sh
npm init -y
```

- Creamos el archivo principal `index.js` y el archivo de documentacion `README.md`

### 1.2 Instalacion de dependencias
Recordemos que muchas veces, los pasos a seguir van a ser 
    1. Instalacion (de modulos)
    2. Importacion (de modulos)
    3. Inicializacion (utilizacion de todos los metodos y funciones de ese modulo)

- **express**: Framework minimalista Node.js para crear servidores web
- **mysql2**: Cliente mysql para Node.js
- **nodemon**: Herramienta que reinicia automaticamente la aplicacion Node.js cuando detecta cambios en los archivos
- **dotenv**: Modulo que carga variables de entorno desde un archivo `.env` al entorno de ejecucion de Node.js

```sh
npm install express mysql2 nodemon dotenv
```


### 1.3 Setup del proyecto
- Creamos el archivo .gitignore y le agregamos las lineas `node_modules` y `.env`
- Creamos un script personalizado en `package.json`
- Agregamos el type module para poder usar la sintaxis moderna ES6 llamada ESM o EcmaScript Modules
```json
  "type": "module",
  "scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- **Recordemos que todos los scripts los ejecutamos con el nombre `npm run nombreScript`**

### 1.4 Creamos el arhcivo de variables de entorno `.env`
- Creamos el archivo .`env` que va a contener informacion sensible de nuestro proyecto
- En nuestro archivo .env le agregamos las variables locales sensibles como el puerto o la conexion a la BBDD

```txt
PORT=3000
DB_HOST="localhost"
DB_NAME="tp_prog_iii"
DB_USER="root"
DB_PASSWORD="abc123."
```

---


## 2 / Estructura de directorios y conexion a la BBDD
- Creamos la nueva carpeta y archivo `src/api/config/environments.js` para procesar y exportar la informacion de nuestras variables de entorno
```js
// environments.js
import dotenv from "dotenv";

dotenv.config(); // El metodo config carga las variables de entornop desde nuestro archivo .env

export default { // Vamos a exportar esta informacion sensible
    port: process.env.PORT || 3100,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }   
}
```

- Creamos la nueva carpeta y archivo `src/api/database/db.js`, que sera el modulo que creara y exportara la conexion a nuestra BBDD
```js
// db.js
import mysql2 from "mysql2/promise"; // Importamos el modulo mysql2 en modo promesas para hacer peticiones asincronicas a la BBDD

import environments from "../config/environments.js"; // Importamos la informacion de conexion a nuestra BBDD

const { database } = environments; // Hacemos destructuring para guardar en la variable environments la informacion de la BBDD

const connection = mysql2.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

export default connection;
```

---

## 3 / Creacion de endpoints

### 3.1 Probando conexion a la BBDD con endpoint minimo

- Creamos un servidor minimo de Express.js
```js
// index.js
import express from "express";
const app = express();

import environments from "./src/api/config/environments.js";

const PORT = environments.port;

app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
```

- **Ahora vamos a crear nuestro primer endpoint para traer todos los productos**
```js
// Traer todos los productos
app.get("/products", async (req, res) => {
    try {
        const sql = "SELECT * FROM productos";
        const [rows] = await connection.query(sql);

        res.status(200).json({
            payload: rows
        });
    
    } catch (error) {
        console.error("Error obteniendo productos", error.message);
        res.status(500).json({
            message: "Error interno al obtener productos"
        });
    }

});
```

### 3.2 Creamos la vista para conectar nuestra aplicacion del front para consumir estos datos que ahora le proporciona nuestro endpoint a traves de nuestra API Rest

### 3.3 Setup de [CORS](https://www.npmjs.com/package/cors)
- Para poder consumir nuestra API Rest desde el cliente, vamos a necesitar CORS
```sh
# Instalar CORS
npm i cors
```

- En nuestro archivo principal `index.js`, vamos a usar el middleware CORS
```js

```