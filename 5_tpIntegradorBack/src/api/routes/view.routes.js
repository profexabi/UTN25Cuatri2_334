import { Router } from "express";
const router = Router();
import { vistaProductos } from "../controllers/view.controllers.js";

// Rutas de las vistas
router.get("/", vistaProductos);

router.get("/consultar", (req, res) => {
    res.render("get");
});

router.get("/crear", (req, res) => {
    res.render("create");
});

router.get("/modificar", (req, res) => {
    res.render("update");
});

router.get("/eliminar", (req, res) => {
    res.render("delete");
});

router.get("/login", (req, res) => {
    res.render("login");
});

// Exportamos todas las rutas
export default router;
