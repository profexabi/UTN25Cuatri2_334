/*====================
    Importaciones
====================*/
import express from "express";
const app = express(); // app es la instancia de la aplicacion express

import environments from "./src/api/config/environments.js"; // Importamos las variables de entorno para definir el puerto
const PORT = environments.port;
const SESSION_KEY = environments.session_key;

import cors from "cors";

import { loggerUrl, saluditos } from "./src/api/middlewares/middlewares.js";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";
import { join, __dirname } from "./src/api/utils/index.js";

import session from "express-session";
import connection from "./src/api/database/db.js";


/*====================
    Middlewares
====================*/
app.use(cors()); //Middleware CORS basico que permite todas las solicitudes
app.use(express.json()); // Middleware que transforma el JSON de las peticiones POST y PUT a objetos JS
app.use(loggerUrl);

// Middleware saluditos, saluda entre la peticion req y la respuesta
// app.use(saluditos);

// Middleware para servir archivos estaticos
app.use(express.static(join(__dirname, "src/public"))); // Vamos a construir la ruta relativa para servir los archivos de la carpeta /public

/*======================================
     Config Login
========================================
    - HTTP es un protocolo sin estado, lo que significa que cada solicitud del cliente al servidor se trata como una transacción independiente, sin relación con solicitudes anteriores.
    - Esto implica que el servidor no guarda ninguna información sobre conexiones o interacciones previas, y por tanto, al finalizar una transacción, todos los datos se pierden

Sin sesiones no hay forma de saber si el usuario esta logueado, a menos que usemos tokens JWT, cookies firmadas u otro sistema, por eso usamos express-session

1. Instalamos express-session
2. Creamos una clave secreta y la exportamos con environments.js

3. Hacemos la configuracion para el middleware de sesion:*/
app.use(session({
    secret: SESSION_KEY, // Firma las cookies para evitar manipulacion (por eso debe ser aleatoria y secreta)
    resave: false, // Evita guardar la sesion si no hubo cambios
    saveUninitialized: true // No guarda sesiones vacios
}));

// 4. Crear vista login e incorporar el middleware para parsear datos de un <form>

// 5. Habilitar la creacion de usuarios -> Creando un endpoint y una vista

// 6. Ahora vamos a crear el endpoint que va a recibir los datos del <form> de login.ejs


// ========================================


// Middleware para parsear info de un <form>
// Middleware necesario para leer formularios HTML <form method="POST">
app.use(express.urlencoded({
    extended: true
}));



/*=====================
    Configuracion
====================*/
app.set("view engine", "ejs"); // Configuramos EJS como motor de plantillas
app.set("views", join(__dirname, "src/views")); // Indicamos la ruta de las vistas en nuestro proyecto



/*==================
    Rutas
==================*/

// Endpoint que no devuelve ninguna respuesta y queda la llamada colgada y la conexion sin terminar
app.get("/test", (req, res) => {
    console.log("Este endpoint no ofrece ninguna respuesta y se queda aca trabado...");
});

app.use("/api/products", productRoutes);

app.use("/", viewRoutes);


// Endpoint para crear usuarios
app.post("/api/users", async (req, res) => {
    try {
        const { correo, password } = req.body;

        if(!correo || !password ) {
            return res.status(400).json({
                message: "Datos invalidos, asegurate de enviar todos los campos"
            });
        }

        let sql = `
            INSERT INTO usuarios (correo, password)
            VALUES (?, ?)
        `;

        const [rows] = await connection.query(sql, [correo, password]);

        res.status(201).json({
            message: "Usuario creado con exito",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error interno en el servidor",
            error: error
        })
    }
});


// Endpoint para inicio de sesion, recibimos correo y password con una peticion POST
app.post("/login", async (req, res) => {
    try {
        const { correo, password } = req.body;

        // Evitamos consulta innecesaria
        if(!correo || !password) {
            return res.render("login", {
                error: "Todos los campos son obligatorios!"
            });
        }

        const sql = `SELECT * FROM usuarios where correo = ? AND password = ?`;
        const [rows] = await connection.query(sql, [correo, password]);

        // Si no existen usuarios con ese correo o password
        if(rows.length === 0) {
            return res.render("login", {
                error: "Credenciales incorrectas!"
            });
        }

        console.log(rows);
        const user = rows[0];
        console.table(user);

        // Ahora toca guardar sesion y hacer el redirect
        // Crearmos la sesion del usuario, que es un objeto que guarda su id y su correo
        req.session.user = {
            id: user.id,
            correo: user.correo
        }

        res.redirect("/"); // Redirigimos a la pagina principal

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
});

// Endpoint para cerrar sesion (destruir sesion y redireccionar)
app.post("/logout", (req, res) => {

    // Destruimos la sesion que habiamos creado
    req.session.destroy((error) => {
        if(error) {
            console.error("Error al destruir la sesion", error);
            return res.status(500).json({
                error: "Error al cerrar la sesion"
            })
        }

        res.redirect("login"); // Redirigimos a login
    })
});

// TO DO, hacer repaso de login, incorporar bcrypt, impresion de tickets y descarga de excels ventas



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
