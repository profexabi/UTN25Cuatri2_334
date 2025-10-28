/*====================
    Importaciones
====================*/
import express from "express";
const app = express();

import environments from "./src/api/config/environments.js";

const PORT = environments.port;


/*==================
    Endpoints
==================*/
app.get("/", (req, res) => {
    res.send("Holis mundo desde Express.js");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

