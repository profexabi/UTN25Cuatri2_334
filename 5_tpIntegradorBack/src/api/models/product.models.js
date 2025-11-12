/*===========================
    Modelos productos
===========================*/

import connection from "../database/db.js"; // Importamos la conexion a la BBDD

// Trae todos los productos
const selectAllProducts = () => {
    // Optimizacion 1: Seleccionar solamente los campos necesarios, evitar SELECT *
    // La idea es devolver solo las columnas que necesita el front: - datos transferidos, - carga de red, + seguridad
    const sql = "SELECT * FROM productos";

    // Con rows extraemos exclusivamente los datos que solicitamos en la consulta
    return connection.query(sql);
}

// Selecciona producto por id
const selectProductWhereId = (id) => {
    // Gracias al uso de los placeholders -> ? evitamos ataques de inyeccion SQL
    //let sql = `SELECT * FROM productos WHERE productos.id = ${id}`; // Opcion 1. Consulta no segura
    let sql = "SELECT * FROM productos WHERE productos.id = ?"; // Opcion 2, sentencia mas segura

    //let [rows] = await connection.query(sql); // Aca introducimos la consulta 1 no segura

    // Optimizacion 2: Limitar los resultados de la consulta
    return connection.query(sql, [id]); // Este id reemplazara el placeholder ?
}

// Inserta producto
const insertProduct = (image, name, price, type) => {
    let sql = `INSERT INTO productos (imagen, nombre, precio, tipo) VALUES (?, ?, ?, ?)`;
    return connection.query(sql, [image, name, price, type]);
}


// Actualiza producto
const updateProduct = (name, image, type, price, active, id) => {
    let sql = `
        UPDATE productos
        SET nombre = ?, imagen = ?, tipo = ?, precio = ?, activo = ?
        WHERE id = ?
    `;

    return connection.query(sql, [name, image, type, price, active, id]);
}


// Eliminar producto
const deleteProduct = (id) => {
    // Opcion 1: Borrado normal
    let sql = "DELETE FROM productos WHERE id = ?";

    // Opcion 2: Baja logica
    //let sql = "UPDATE productos set active = 0 WHERE id = ?";
    return connection.query(sql, [id]);
}



export default {
    selectAllProducts,
    selectProductWhereId,
    insertProduct,
    updateProduct,
    deleteProduct
}


