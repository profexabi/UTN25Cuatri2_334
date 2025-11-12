# Glosario

## Que es Express Router?

- Express Router es una función en Express.js que permite crear un objeto router que actúa como una "miniaplicación" con su propio conjunto de middleware y rutas 

- **Este objeto puede manejar solicitudes de manera modular y organizada**, limitándose a segmentos específicos de una aplicación 

- Es especialmente útil para estructurar rutas de forma más mantenible, permitiendo agrupar rutas relacionadas por funcionalidad, como usuarios, productos o pedidos 

- Además, permite aplicar middleware de forma eficiente a rutas específicas o grupos de rutas Se puede instanciar usando `express.Router()` y luego montarse en la aplicación principal mediante `app.use()`

---

## Que es MVC, Modelo Vista Controlador?

El Modelo-Vista-Controlador (MVC) es un patrón arquitectónico de software que divide el desarrollo de aplicaciones en tres componentes interconectados: el modelo, la vista y el controlador. Originalmente diseñado para interfaces gráficas de usuario de escritorio, hoy es ampliamente utilizado en el desarrollo de aplicaciones web 

**El modelo se encarga de gestionar los datos** y la lógica de negocio de la aplicación, **incluyendo el acceso a bases de datos**, validaciones y operaciones como crear, leer, actualizar y borrar (CRUD)  

**La vista es responsable de presentar la información al usuario, generalmente a través de una interfaz gráfica** o página web, y solo se ocupa de la representación visual sin incluir lógica de negocio  

El controlador actúa como intermediario entre el usuario, el modelo y la vista: recibe las acciones del usuario, gestiona la lógica de la solicitud, solicita datos al modelo y selecciona la vista adecuada para mostrar la respuesta. **El controlador se encarga de la logica de las peticiones y las respuestas**

Este patrón promueve una separación clara de responsabilidades, lo que facilita el mantenimiento, la escalabilidad y la reutilización del código  Además, permite que diferentes desarrolladores trabajen en distintas capas simultáneamente, mejorando la productividad en proyectos complejos  MVC es compatible con múltiples frameworks y lenguajes de programación, como Ruby on Rails, Django, Laravel, ASP.NET y Angular, entre otros  Aunque el patrón ha evolucionado con el tiempo, su enfoque fundamental sigue siendo la separación entre la lógica de negocio, la presentación y la gestión de eventos 

1. La url en nuestro archivo principal llama a la ruta
```js
// index.js
app.use("/api/products", productRoutes);
```

2. La ruta en nuestro archivo de ruta, llama al middleware y luego llama al controlador
```js
// product.routes.js
// Get product by id -> Consultar producto por su id
router.get("/:id", validateId, getProductById);
```

3. El controlador va a llamar al modelo
```js
// Get product by id -> Traer producto por id
export const getProductById = async (req, res) => {

    try {
        let { id } = req.params; // Aca extraemos el 
        let sql = "SELECT * FROM productos WHERE productos.id = ?"; 
        
        let [rows] = await 
```