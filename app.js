import express from 'express';
import usuariosRouter from './rutas/usuario.js';

const app = express();
app.use(express.json()); // Middleware para procesar JSON

app.use('/usuarios', usuariosRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
