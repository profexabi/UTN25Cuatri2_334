import { Router } from "express";
const router = Router();

// Rutas de las vistas
router.get("/index", (req, res) => {
    res.render("index");
});

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

// Exportamos todas las rutas
export default router;
