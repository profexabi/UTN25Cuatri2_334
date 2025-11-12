// Importamos el middleware Router -> Le decimos "mini aplicacion porque termina haciendo lo mismo que express para las rutas"
import { Router } from "express"; // Lo mismo que import express from "express"
const router = Router(); // Lo mismo que const app = express();

// Importamos el middleware validateId
import { validateId } from "../middlewares/middlewares.js";
import { createProduct, removeProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controllers.js";


// GET -> Traer todos los productos
router.get("/", getAllProducts);


// Get product by id -> Consultar producto por su id
router.get("/:id", validateId, getProductById);


// POST -> Crear un nuevo producto
router.post("/", createProduct);

// TO DO, Optimizacion II -> actualizar solo los campos que hayan cambiado
// UPDATE -> Actualizar un producto por su id
router.put("/", updateProduct);


// DELETE -> Eliminar un producto por su id
router.delete("/:id", validateId, removeProduct);


// Exportamos todas las rutas
export default router;