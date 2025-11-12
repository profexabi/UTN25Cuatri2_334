// Middleware de aplicacion -> Se aplica a todas las rutas
// Middleware logger para mostrar por consola todas las peticiones a nuestro servidor
const loggerUrl = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
   
    // Con next continuamos al siguiente middleware o a la respuesta
    next();
}


// Middleware de ruta -> Se aplica a rutas especificas
const validateId = (req, res, next) => {
    let { id } = req.params;

    // Nos aseguramos que el ID sea un numero (La consulta podria fallar o generar un error en la BBDD)
    if(!id || isNaN(Number(id))) {
        return res.status(400).json({
            message: "El id del producto debe ser un numero valido"
        })
    }

    // Convertimos el parametro id (originalmente un string porque viene de la URL) a un numero entero (en base 10 decimal)
    req.id = parseInt(id, 10);

    console.log("Id validado: ", req.id);
    next();
}


// Middleware saluditos
const saluditos = (req, res, next) => {
    console.log("Holis! Como va che todo en orden?");
    next();
}


export {
    loggerUrl,
    validateId,
    saluditos
}