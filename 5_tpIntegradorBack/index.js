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

        // Comprobamos que se reciban correctamente los productos
        // console.log(rows);
        
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


// Get product by id -> Consultar producto por su id
app.get("/products/:id", async (req, res) => {

    try {
        // let id = req.params.id;
        let { id } = req.params;

        // Gracias al uso de los placeholders -> ? evitamos ataques de inyeccion SQL
        let sql = "SELECT * FROM productos WHERE productos.id = ?";

        let [rows] = await connection.query(sql, [id]); // Este id reemplazara el placeholder ?
        console.log(rows);
 
        res.status(200).json({
            payload: rows
        });

        /*
        Los placeholders en SQL son marcadores especiales, como el carácter ? o nombres como :nombre, que se utilizan en consultas SQL 
        para indicar dónde se insertarán los valores reales durante la ejecución de la consulta.
        
        Su uso principal es prevenir inyecciones SQL al separar el código de la consulta del contenido de los datos, 
        ya que los valores se vinculan de forma segura a los placeholders en lugar de ser incrustados directamente en la cadena de consulta.

        // Gracias al destructuring, en rows guardamos y devolvemos especificamente los datos del producto, el resultado especifico de la consulta
        //let [rows, fields] = await connection.query(sql, [id]); // Este id reemplazara el placeholder ?
        //console.log(rows);
        [
            {
                id: 2,
                nombre: 'Led Zeppelin - Led Zeppelin II',
                tipo: 'LP',
                precio: 50000,
                imagen: 'https://www.songfacts.com/img-artalbums-145-21ea7543cb15fa1143f6d2658b63f681.png',
                activo: 1
            }
        ]

        //console.log(fields);
        [
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `nombre` VARCHAR(240) NOT NULL,
            `tipo` VARCHAR(100) NOT NULL,
            `precio` FLOAT NOT NULL,
            `imagen` VARCHAR(240) NOT NULL,
            `activo` TINYINT(1) NOT NULL
        ]*/

    } catch(error) {
        console.error(`Error obteniendo productos con id ${id}`, error.message);

        res.status(500).json({
            message: "Error interno al obtener producto con id"
        })
    }


})


/* TO DO: Optimizar:
    - GET: Seleccionar solamente los campos necesarios y devolver tambien un message junto al payload
    - GET by id: Meter optimizaciones
*/
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
