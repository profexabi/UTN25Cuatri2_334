/*===========================
    OS (Operative System)
=============================
Este modulo nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js.

Vamos a poder obtener la cantidad de memoria libre disponible o el tipo de sistema operativo
*/

// Importamos este modulo integrado en Node.js
const os = require("os");

let memoriaLibre = os.freemem();
let tipoSistemaOperativo = os.type();

console.log("Memoria disponible: ", memoriaLibre);
console.log("Tipo de sistema operativo: ", tipoSistemaOperativo);
console.log(os.cpus())