# Como exportar todo el contenido de un modulo en Express con `ESM`

Para **exportar todo el contenido de un módulo** en **Express con ECMAScript Modules (ESM)**, usa la sintaxis `export * from` en un archivo índice (por ejemplo, `routes/index.js`) para re-exportar todos los **named exports** de otros módulos.

### ✅ Exportar Todo (Named Exports)
```js
// routes/user.js
export const getUser = (req, res) => res.json({ user: 'John' });
export const updateUser = (req, res) => res.json({ status: 'Updated' });
```

```js
// routes/product.js
export const getProducts = (req, res) => res.json({ products: [] });
```

```js
// routes/index.js
export * from './user.js';
export * from './product.js';
```

```js
// app.js
import { getUser, getProducts } from './routes/index.js';
import express from 'express';

const app = express();

app.get('/user', getUser);
app.get('/products', getProducts);

app.listen(3000);
```

### ⚠️ Exportaciones por Defecto (`default`)
Si usas `export default`, debes re-exportar manualmente con alias:

```js
// routes/auth.js
const authRouter = require('express').Router();
authRouter.post('/login', (req, res) => res.json({ ok: true }));
export default authRouter;
```

```js
// routes/index.js
export { default as auth } from './auth.js';
```

```js
// app.js
import { auth } from './routes/index.js';
app.use('/auth', auth);
```

### Requisitos
- Asegúrate de tener `"type": "module"` en tu `package.json`.
- Usa extensiones `.js` en las rutas de importación/exportación.



