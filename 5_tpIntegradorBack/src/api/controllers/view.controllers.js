/*===============================
    Controladores vistas
===============================*/
import ProductModel from "../models/product.models.js";

export const vistaProductos = async (req, res) => {

    /* De esta comprobacion ya se encarga el middleware requireLogin
    // Chequeamos si no existe la sesion de usuario, de ser asi, redirigimos a /login
    if(!req.session.user) {
        return res.redirect("/login")
    }
    */

    try {
        const [rows] = await ProductModel.selectAllProducts();
        res.render("index", {
            productos: rows
        });

    } catch (error) {
        console.error(error)
    }
}