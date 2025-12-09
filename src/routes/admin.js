// routes/admin.js
const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/auth');
const database = require('../database');  // importa el modelo donde añadiste obtenerUsuarios

// Página principal del panel admin
router.get('/', isAdmin, (req, res) => {
  res.render('admin', { username: req.session.user.username });
});

// Nueva ruta para ver usuarios registrados
router.get('/usuarios', isAdmin, (req, res) => {
  const usuarios = database.contacts.obtenerUsuarios();       // función añadida en tu modelo
  res.render('admin_usuarios', { usuarios });        // renderizamos la tabla
});

module.exports = router;
