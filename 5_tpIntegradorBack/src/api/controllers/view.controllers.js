/*===============================
    Controladores vistas
===============================*/
import ProductModel from "../models/product.models.js";

export const vistaProductos = async (req, res) => {
    try {
        const [rows] = await ProductModel.selectAllProducts();
        res.render("index", {
            productos: rows
        });

    } catch (error) {
        console.error(error)
    }
}