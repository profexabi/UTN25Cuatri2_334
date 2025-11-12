/*========================
    Archivo de barril
==========================
Este es el archivo que contiene todas las rutas, las importa con un nombre y las exporta con ese mismo nombre
*/

// import userRoutes from "./user.routes.js"; // Importar eventuales rutas de usuario
import productRoutes from "./product.routes.js"; // Importamos las rutas de producto que definimos en product.routes.js

// Exportamos las rutas
export {
    productRoutes
}

