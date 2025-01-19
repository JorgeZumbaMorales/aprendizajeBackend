import express from 'express';
import supabase from '../config/supabaseClient.js';
import Usuario from '../modelo/usuario.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('usuarios').select('*');
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
});

// Ruta para crear un usuario
router.post('/', async (req, res) => {
  const usuarioDatos = req.body;
  const errores = Usuario.validar(usuarioDatos);

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  const usuario = new Usuario(usuarioDatos);
  const { data, error } = await supabase.from('usuarios').insert([
    { nombre: usuario.nombre, email: usuario.email, fecha_creacion: usuario.fecha_creacion }
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
});

export default router;
