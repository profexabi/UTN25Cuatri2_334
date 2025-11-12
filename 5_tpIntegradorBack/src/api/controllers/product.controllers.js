import connection from "../database/db.js";  // Importamos la conexion a la BBDD para poder enviarle sentencias SQL

// Get all products -> Traer todos los productos
export const getAllProducts = async (req, res) => {

    try {
        // Optimizacion 1: Seleccionar solamente los campos necesarios, evitar SELECT *
        // La idea es devolver solo las columnas que necesita el front: - datos transferidos, - carga de red, + seguridad
        const sql = "SELECT * FROM productos";
    
        // Con rows extraemos exclusivamente los datos que solicitamos en la consulta
        const [rows] = await connection.query(sql);

        // Comprobamos que se reciban correctamente los productos
        //console.log(rows);
        
        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });
        
    
    } catch (error) {
        console.error("Error obteniendo productos", error.message);

        res.status(500).json({
            message: "Error interno al obtener productos"
        });
    }
}


// Get product by id -> Traer producto por id
export const getProductById = async (req, res) => {

    try {
        // let id = req.params.id;
        let { id } = req.params; // Aca extraemos el valor "2" de localhost:3000/products/2

        /* Logica exportada al middleware validateId
        // Optimizacion 1: Validacion de parametros antes de acceder a la BBDD para evitar hacer una consulta donde el parametro id no sea valido
        if(!id || isNaN(Number(id))) {
            return res.status(400).json({
                message: "El id del producto debe ser un numero valido"
            })
        }
        */

        // Gracias al uso de los placeholders -> ? evitamos ataques de inyeccion SQL
        //let sql = `SELECT * FROM productos WHERE productos.id = ${id}`; // Opcion 1. Consulta no segura
        let sql = "SELECT * FROM productos WHERE productos.id = ?"; // Opcion 2, sentencia mas segura

        //let [rows] = await connection.query(sql); // Aca introducimos la consulta 1 no segura

        // Optimizacion 2: Limitar los resultados de la consulta

        
        let [rows] = await connection.query(sql, [id]); // Este id reemplazara el placeholder ?
        //console.log(rows);
        
        // Optimizacion 3: Comprobamos que exista el producto con ese id
        if(rows.length === 0) {
            // Este console.log es desde la consola del servidor
            console.log(`Error! No se encontro producto con id ${id}`);

            // Esta respuesta se la brindamos al usuario y puede elegir verla por consola o por pantalla
            return res.status(404).json({
                message: `No se encontro producto con id ${id}`
            });
        }

 
        res.status(200).json({
            payload: rows,
            message: "Producto encontrado"
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

}


// Create product -> Crear un nuevo producto
export const createProduct = async (req, res) => {

    try {
        /*  image: "johnnymelavo.com"
            name: "Johnny Melavo"
            price: "12"
            type: "CD"
        */

        // Gracias al destructuring, recogemos estos datos del body
        let { image, name, price, type } = req.body;
        console.log(req.body);

        // Optimizacion 1: Validacion de datos de entrada
        if(!image || !name || !price || !type) {
            return res.status(400).json({
                message: "Datos invalidos, asegurate de enviar todos los campos"
            });
        }

        let sql = `INSERT INTO productos (imagen, nombre, precio, tipo) VALUES (?, ?, ?, ?)`;

        let [result] = await connection.query(sql, [image, name, price, type]);
        console.log(result);

        // Codigo de estado 201 -> Created
        res.status(201).json({
            message: "Producto creado con exito",
            productId: result.insertId
        });

    } catch(error) {
        console.log(error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
}


// Update product -> Actualiza un producto
export const updateProduct = async (req, res) => {
    try {
        let { id, name, image, type, price, active } = req.body;

        // Optimizacion 1: Validacion basica de datos recibidos
        if(!id || !name || !image || !type || !price || !active) {
            return res.status(400).json({
                message: "Faltan campos requeridos"
            });
        }

        let sql = `
            UPDATE productos
            SET nombre = ?, imagen = ?, tipo = ?, precio = ?, activo = ?
            WHERE id = ?
        `;

        let [result] = await connection.query(sql, [name, image, type, price, active, id]);
        console.log(result);

        // Optimizacion 2: Testeamos que se actualizara, esto lo sabemos gracias a affectedRows que devuelve result
        if(result.affectedRows === 0) { // No se actualizo nada
            return res.status(400).json({
                message: "No se actualizo el producto"
            });
        }

        res.status(200).json({
            message: `Producto con id ${id} actualizado correctamente`
        });

    } catch (error) {
        console.error("Error al actualizar productos", error);

        res.status(500).json({
            message: "Error interno del servidor", error
        });
    }
}


// Delete product -> Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;

        /* Logica exportada al middleware validateId
        // Optimizacion 1: Validacion de parametros antes de acceder a la BBDD para evitar hacer una consulta donde el parametro id no sea valido
        if(!id || isNaN(Number(id))) {
            return res.status(400).json({
                message: "El id del producto debe ser un numero valido"
            })
        }
        */

        // Opcion 1: Borrado normal
        let sql = "DELETE FROM productos WHERE id = ?";

        // Opcion 2: Baja logica
        //let sql = "UPDATE productos set active = 0 WHERE id = ?";

        let [result] = await connection.query(sql, [id]);
        console.log(result);

        // Optimizacion 2: Testeamos que se borro, esto lo sabemos gracias a affectedRows que devuelve result
        if(result.affectedRows === 0) { // No se borro nada
            return res.status(400).json({
                message: "No se eliminó el producto"
            });
        }
        

        return res.status(200).json({
            message: `Producto con id ${id} eliminado correctamente`
        });

    } catch(error) {
        console.error("Error al eliminar un producto: ", error);

        res.status(500).json({
            message: `Error al eliminar un producto con id ${id}: `, error,
            error: error.message
        })
    }
}