// Importamos el modulo dotenv que previamente instalamos
import dotenv from "dotenv";

// Ahora que lo importamos, vamos a poder usar sus metodos y funciones
dotenv.config(); // El metodo config carga las variables de entornop desde nuestro archivo .env

// Vamos a exportar esta informacion sensible
export default {
    port: process.env.PORT || 3100,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }   
}