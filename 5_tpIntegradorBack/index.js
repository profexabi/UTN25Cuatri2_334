/*====================
    Importaciones
====================*/
import express from "express";
const app = express();

import environments from "./src/api/config/environments.js"; // Importamos las variables de entorno para definir el puerto
const PORT = environments.port;

import connection from "./src/api/database/db.js"; // Importamos la conexion a la BBDD para poder enviarle sentencias SQL
import cors from "cors";


/*====================
    Middlewares
====================*/
app.use(cors()); //Middleware CORS basico que permite todas las solicitudes


/*==================
    Endpoints
==================*/
app.get("/", (req, res) => {
    res.send("Holis mundo desde Express.js");
});

// Traer todos los productos
app.get("/products", async (req, res) => {

    try {
        const sql = "SELECT * FROM productos";
    
        // Con rows extraemos exclusivamente los datos que solicitamos en la consulta
        const [rows] = await connection.query(sql);

        console.log(rows);
        
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


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
